import type { Metadata } from "next";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "新着情報",
};

const newsItems = [
  { date: "2022.03.16", title: "取り扱い商材更新のお知らせ", icon: "📦" },
  { date: "2020.05.20", title: "軽貨物事業開始", icon: "🚚" },
  { date: "2019.11.03", title: "HPリニューアル", icon: "🌐" },
];

export default function NewsPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-16 pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="label mb-4">▶ News</p>
            <h1 className="mb-4">新着情報</h1>
            <p className="text-xs" style={{ color: "var(--color-text-mid)" }}>
              最新のお知らせ
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── News List ── */}
      <section className="section-pad pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="01" title="お知らせ一覧" subtitle="All News" />
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {newsItems.map((item, i) => (
              <FadeIn key={item.date + item.title} delay={i + 1}>
                <div className="pixel-card flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="text-xl">{item.icon}</span>
                  <time
                    className="text-xs shrink-0"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.date}
                  </time>
                  <p className="text-xs sm:text-sm flex-1">{item.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={4}>
            <div className="max-w-3xl mx-auto mt-10">
              <div
                className="pixel-card text-center"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="text-xs" style={{ color: "var(--color-text-mid)" }}>
                  📢 新しいお知らせがある場合、こちらに掲載されます。
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
