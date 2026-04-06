import type { Metadata } from "next";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "会社案内",
};

export default function CompanyPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-16 pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="label mb-4">▶ Company</p>
            <h1 className="mb-4">会社案内</h1>
            <p className="text-xs" style={{ color: "var(--color-text-mid)" }}>
              株式会社エコロジーコミュニケーションについて
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Philosophy ── */}
      <section
        className="section-pad pixel-grid-bg"
        style={{ backgroundColor: "var(--color-base-light)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <SectionFolio number="01" title="企業理念" subtitle="Philosophy" />
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <FadeIn delay={1}>
                <div className="pixel-card mb-6">
                  <p className="text-base leading-[2.2] mb-2" style={{ color: "#ffffff" }}>
                    お付き合いする企業様のコストを
                    <br className="hidden md:block" />
                    徹底的に下げることに
                    <span style={{ color: "var(--color-accent)" }}>全力を注ぎます。</span>
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={2}>
                <div className="pixel-card">
                  <p
                    className="text-xs leading-[2.4] mb-4"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    日々、急速な変化をしている情報社会で、クライアント様へは常に有益且つ、
                    正確な情報提供を徹底し、現在抱えている問題の解決に当事者意識をもって接していきます。
                  </p>
                  <p
                    className="text-xs leading-[2.4]"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    人と人、企業と企業をつなぎ、双方のビジネスが円滑に展開できる提案に注力し、
                    我々、エコロジーコミュニケーションとお付き合いできて、
                    「よかった」「ありがとう」を沢山頂ける企業を目指していきます。
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Company Overview ── */}
      <section className="section-pad pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="02" title="会社概要" subtitle="Overview" />
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={1}>
              <div className="pixel-card">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <th>会社名</th>
                      <td>株式会社エコロジーコミュニケーション</td>
                    </tr>
                    <tr>
                      <th>営業所</th>
                      <td>
                        〒980-0014
                        <br />
                        宮城県仙台市青葉区本町1丁目9-5　五城ビル2F
                        <br />
                        TEL：022-226-8283
                        <br />
                        FAX：022-745-2314
                      </td>
                    </tr>
                    <tr>
                      <th>事業内容</th>
                      <td>
                        法人携帯事業
                        <br />
                        運送コンサルティング事業
                        <br />
                        各種経費削減事業
                        <br />
                        企業間アライアンス事業
                      </td>
                    </tr>
                    <tr>
                      <th>資本金</th>
                      <td>3,000,000円</td>
                    </tr>
                    <tr>
                      <th>設立日</th>
                      <td>2011年12月5日</td>
                    </tr>
                    <tr>
                      <th>事業者登録番号</th>
                      <td>T3370001021179</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Access ── */}
      <section
        className="section-pad pixel-grid-bg"
        style={{ backgroundColor: "var(--color-base-light)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="03" title="アクセス" subtitle="Access" />
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={1}>
              <div className="pixel-border p-1">
                <iframe
                  src="https://maps.google.com/maps?q=%E5%AE%AE%E5%9F%8E%E7%9C%8C%E4%BB%99%E5%8F%B0%E5%B8%82%E9%9D%92%E8%91%89%E5%8C%BA%E6%9C%AC%E7%94%BA1%E4%B8%81%E7%9B%AE9-5+%E4%BA%94%E5%9F%8E%E3%83%93%E3%83%AB&z=17&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="アクセスマップ"
                />
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <p
                className="mt-4 text-xs"
                style={{ color: "var(--color-text-mid)" }}
              >
                📍 〒980-0014 宮城県仙台市青葉区本町1丁目9-5　五城ビル2F
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
