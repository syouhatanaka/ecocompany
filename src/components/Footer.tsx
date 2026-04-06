import Link from "next/link";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/company", label: "会社案内" },
  { href: "/service", label: "業務内容" },
  { href: "/recruit", label: "採用情報" },
  { href: "/news", label: "新着情報" },
];

export default function Footer() {
  return (
    <footer
      className="section-pad"
      style={{
        backgroundColor: "var(--color-base-light)",
        borderTop: "3px solid var(--color-accent)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <p
              className="text-xs tracking-[0.15em] uppercase mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              ▶ Ecology Communication Inc.
            </p>
            <p className="text-sm mb-4">
              株式会社エコロジーコミュニケーション
            </p>
            <div
              className="text-xs leading-[2.2] space-y-0.5"
              style={{ color: "var(--color-text-mid)" }}
            >
              <p>〒980-0014</p>
              <p>宮城県仙台市青葉区本町1丁目9-5</p>
              <p>五城ビル2F</p>
              <p className="mt-2">TEL: 022-226-8283</p>
              <p>FAX: 022-745-2314</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label mb-4">Menu</p>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  &gt; {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Registration */}
          <div>
            <p className="label mb-4">Registration</p>
            <p
              className="text-xs leading-[2]"
              style={{ color: "var(--color-text-mid)" }}
            >
              事業者登録番号
              <br />
              T3370001021179
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="pixel-divider-subtle mt-12 mb-4" />
        <p
          className="text-[0.65rem] tracking-[0.06em]"
          style={{ color: "var(--color-text-mid)" }}
        >
          &copy; {new Date().getFullYear()} 株式会社エコロジーコミュニケーション
        </p>
      </div>
    </footer>
  );
}
