"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "トップ", icon: "🏠" },
  { href: "/company", label: "会社案内", icon: "🏢" },
  { href: "/service", label: "業務内容", icon: "⚡" },
  { href: "/recruit", label: "採用情報", icon: "👤" },
  { href: "/news", label: "新着情報", icon: "📢" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(26,26,46,0.95)"
          : "rgba(26,26,46,0.8)",
        borderBottom: "3px solid var(--color-accent)",
        boxShadow: scrolled
          ? "0 4px 0 0 rgba(0,212,170,0.15)"
          : "none",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-lg" style={{ color: "var(--color-accent)" }}>
            ▶
          </span>
          <div className="flex flex-col leading-tight">
            <span
              className="text-[0.6rem] tracking-[0.15em] uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Ecology Communication
            </span>
            <span
              className="text-xs tracking-[0.06em]"
              style={{ color: "var(--color-text)" }}
            >
              エコロジーコミュニケーション
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link flex items-center gap-1.5 ${pathname === item.href ? "active" : ""}`}
            >
              <span className="text-xs">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          style={{ color: "var(--color-accent)" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <nav className="flex flex-col px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 py-3 text-sm ${
                pathname === item.href ? "text-[var(--color-accent)]" : ""
              }`}
              style={{
                borderBottom: "1px dashed var(--color-border)",
                color: pathname === item.href ? "var(--color-accent)" : "var(--color-text)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
              {pathname === item.href && <span className="ml-auto text-xs">◀ NOW</span>}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
