"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/company", label: "会社案内" },
  { href: "/service", label: "業務内容" },
  { href: "/recruit", label: "採用情報" },
  { href: "/news", label: "新着情報" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 backdrop-blur-[12px]"
          : "py-6"
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(245,244,240,0.85)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(26,26,26,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span
            className="text-[0.65rem] tracking-[0.12em] uppercase"
            style={{ color: "var(--color-text-mid)" }}
          >
            Ecology Communication
          </span>
          <span
            className="font-[family-name:var(--font-noto-serif-jp)] text-sm tracking-[0.04em] font-light"
            style={{ color: "var(--color-text)" }}
          >
            エコロジーコミュニケーション
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span
            className={`block w-5 h-[1px] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
            style={{ backgroundColor: "var(--color-text)" }}
          />
          <span
            className={`block w-5 h-[1px] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
            style={{ backgroundColor: "var(--color-text)" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "rgba(245,244,240,0.95)" }}
      >
        <nav className="flex flex-col items-start gap-6 px-6 py-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
