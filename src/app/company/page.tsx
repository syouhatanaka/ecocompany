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
      <section className="pt-40 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn>
                <p className="label mb-4" style={{ color: "var(--color-accent)" }}>
                  Company
                </p>
                <h1 className="font-[family-name:var(--font-noto-serif-jp)]">会社案内</h1>
              </FadeIn>
            </div>
            {/* Vertical text */}
            <div className="hidden lg:flex col-span-5 items-end justify-end">
              <p className="vertical-text">株式会社エコロジーコミュニケーション</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Philosophy ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <FadeIn>
                <SectionFolio number="01" title="企業理念" subtitle="Philosophy" />
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <FadeIn delay={1}>
                <p className="font-[family-name:var(--font-noto-serif-jp)] text-xl md:text-2xl font-light leading-[1.8] mb-8">
                  お付き合いする企業様のコストを
                  <br className="hidden md:block" />
                  徹底的に下げることに全力を注ぎます。
                </p>
              </FadeIn>
              <FadeIn delay={2}>
                <div
                  className="text-sm leading-[2.2] space-y-4"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  <p>
                    日々、急速な変化をしている情報社会で、クライアント様へは常に有益且つ、
                    正確な情報提供を徹底し、現在抱えている問題の解決に当事者意識をもって接していきます。
                  </p>
                  <p>
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

      <hr className="ruler" />

      {/* ── Company Overview ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionFolio number="02" title="会社概要" subtitle="Overview" />
          </FadeIn>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <FadeIn delay={1}>
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
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Access ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionFolio number="03" title="アクセス" subtitle="Access" />
          </FadeIn>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9 lg:col-start-3">
              <FadeIn delay={1}>
                <div
                  className="w-full overflow-hidden"
                  style={{ border: "1px solid var(--color-border-light)" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.2!2d140.873!3d38.264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy65pys55S6MeS4geebrjktNeOAgOS6lOWfjuODk-ODqzJG!5e0!3m2!1sja!2sjp!4v1"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="アクセスマップ"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={2}>
                <p
                  className="mt-4 text-sm"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  〒980-0014 宮城県仙台市青葉区本町1丁目9-5　五城ビル2F
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
