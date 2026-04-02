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
        backgroundColor: "var(--color-base-warm)",
        borderTop: "1px solid var(--color-border-light)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-12 md:col-span-5">
            <p
              className="text-[0.65rem] tracking-[0.12em] uppercase mb-1"
              style={{ color: "var(--color-text-mid)" }}
            >
              Ecology Communication Inc.
            </p>
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-light tracking-wide mb-6">
              株式会社エコロジーコミュニケーション
            </p>
            <div
              className="text-sm leading-relaxed space-y-1"
              style={{ color: "var(--color-text-mid)" }}
            >
              <p>〒980-0014</p>
              <p>宮城県仙台市青葉区本町1丁目9-5</p>
              <p>五城ビル2F</p>
              <p className="mt-3">TEL: 022-226-8283</p>
              <p>FAX: 022-745-2314</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-12 md:col-span-3 md:col-start-8">
            <p className="label mb-4">Menu</p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-hover text-sm"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Registration */}
          <div className="col-span-12 md:col-span-2">
            <p className="label mb-4">Registration</p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--color-text-mid)" }}
            >
              事業者登録番号
              <br />
              T3370001021179
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="ruler mt-16 mb-6" />
        <p
          className="text-xs tracking-[0.06em]"
          style={{ color: "var(--color-text-mid)" }}
        >
          &copy; {new Date().getFullYear()} 株式会社エコロジーコミュニケーション
        </p>
      </div>
    </footer>
  );
}
