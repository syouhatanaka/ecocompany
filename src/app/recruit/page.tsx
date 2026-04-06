import type { Metadata } from "next";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "採用情報",
};

export default function RecruitPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-16 pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="label mb-4">▶ Recruit</p>
            <h1 className="mb-4">採用情報</h1>
            <p className="text-xs" style={{ color: "var(--color-text-mid)" }}>
              採用についてのご案内
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Current Status ── */}
      <section
        className="section-pad pixel-grid-bg"
        style={{ backgroundColor: "var(--color-base-light)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <SectionFolio number="01" title="採用状況" subtitle="Status" />
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              <FadeIn delay={1}>
                <div className="pixel-border-accent2 p-8 text-center">
                  <p className="text-lg mb-3" style={{ color: "var(--color-accent-2)" }}>
                    ⚠ NOTICE
                  </p>
                  <p className="text-sm mb-2">
                    現在採用活動は行っておりません
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    採用活動を再開する際は、こちらのページにて募集要項を掲載いたします。
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Job Details ── */}
      <section className="section-pad pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="02" title="募集要項" subtitle="Requirements" />
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={1}>
              <p
                className="text-xs mb-6"
                style={{ color: "var(--color-text-mid)" }}
              >
                📄 採用再開時の募集要項（参考）
              </p>
              <div className="pixel-card">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <th>募集職種</th>
                      <td>営業担当</td>
                    </tr>
                    <tr>
                      <th>勤務地</th>
                      <td>
                        〒980-0014
                        <br />
                        宮城県仙台市青葉区本町1丁目9-5　五城ビル2F
                      </td>
                    </tr>
                    <tr>
                      <th>業務内容</th>
                      <td>
                        法人携帯事業 / 運送コンサルティング事業 /
                        <br />
                        各種経費削減事業 / 企業間アライアンス事業
                        <br />
                        <span
                          className="text-xs mt-2 block"
                          style={{ color: "var(--color-text-mid)" }}
                        >
                          クライアントまたは新規業務を担当し、当社提案商品での企画・提案を実施
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>応募資格</th>
                      <td>営業経験者</td>
                    </tr>
                    <tr>
                      <th>勤務時間</th>
                      <td>9:00 ～ 18:00</td>
                    </tr>
                    <tr>
                      <th>休日</th>
                      <td>土日祝</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
