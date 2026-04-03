import type { Metadata } from "next";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "新着情報",
};

const newsItems = [
  { date: "2022.03.16", title: "取り扱い商材更新のお知らせ" },
  { date: "2020.05.20", title: "軽貨物事業開始" },
  { date: "2019.11.03", title: "HPリニューアル" },
];

export default function NewsPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-52 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn>
                <p className="label mb-4" style={{ color: "var(--color-accent)" }}>
                  News
                </p>
                <h1 className="font-[family-name:var(--font-noto-serif-jp)]">新着情報</h1>
              </FadeIn>
            </div>
            <div className="hidden lg:flex col-span-5 items-end justify-end">
              <p className="vertical-text">最新のお知らせ</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── News List ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionFolio number="01" title="お知らせ一覧" subtitle="All News" />
          </FadeIn>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              {newsItems.map((item, i) => (
                <FadeIn key={item.date + item.title} delay={i + 1}>
                  <div
                    className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 py-8"
                    style={{
                      borderBottom: "1px solid var(--color-border-light)",
                    }}
                  >
                    <time
                      className="text-xs tracking-[0.12em] shrink-0 font-[family-name:var(--font-cormorant)]"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {item.date}
                    </time>
                    <p className="text-sm md:text-base">{item.title}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
