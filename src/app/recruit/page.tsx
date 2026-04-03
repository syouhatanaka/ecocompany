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
      <section className="pt-52 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn>
                <p className="label mb-4" style={{ color: "var(--color-accent)" }}>
                  Recruit
                </p>
                <h1 className="font-[family-name:var(--font-noto-serif-jp)]">採用情報</h1>
              </FadeIn>
            </div>
            <div className="hidden lg:flex col-span-5 items-end justify-end">
              <p className="vertical-text">採用についてのご案内</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Current Status ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <FadeIn>
                <SectionFolio number="01" title="採用状況" subtitle="Status" />
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <FadeIn delay={1}>
                <div
                  className="p-8"
                  style={{
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg mb-2">
                    現在採用活動は行っておりません
                  </p>
                  <p
                    className="text-sm"
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

      <hr className="ruler" />

      {/* ── Job Details ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionFolio number="02" title="募集要項" subtitle="Requirements" />
          </FadeIn>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <FadeIn delay={1}>
                <p
                  className="text-sm mb-8"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  採用再開時の募集要項（参考）
                </p>
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
                          className="text-sm mt-2 block"
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
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
