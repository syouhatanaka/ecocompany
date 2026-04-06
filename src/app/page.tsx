import Link from "next/link";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";
import PixelCityscape from "@/components/PixelCityscape";

const services = [
  {
    number: "01",
    title: "経費削減事業",
    subtitle: "Cost Reduction",
    description:
      "法人携帯・電気料金・WEB広告など、企業の固定費を徹底的に見直し、最適なプランをご提案します。",
    icon: "💰",
  },
  {
    number: "02",
    title: "物流事業",
    subtitle: "Logistics",
    description:
      "格安配送サービスから運送業者と荷主のマッチングまで、物流における課題を解決します。",
    icon: "🚚",
  },
  {
    number: "03",
    title: "サービス事業",
    subtitle: "Business Service",
    description:
      "請求代行サービスなど、企業の業務効率化を支援するソリューションを提供します。",
    icon: "📋",
  },
];

const news = [
  { date: "2022.03.16", title: "取り扱い商材更新のお知らせ" },
  { date: "2020.05.20", title: "軽貨物事業開始" },
  { date: "2019.11.03", title: "HPリニューアル" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pixel-grid-bg">
        {/* Scanline overlay */}
        <div className="scanlines" />

        {/* Pixel cityscape at bottom */}
        <PixelCityscape />

        {/* Decorative floating pixels */}
        <div className="absolute top-20 right-12 hidden lg:block">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2"
                style={{
                  backgroundColor: "var(--color-accent)",
                  opacity: 0.15 + i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-40 left-8 hidden lg:block">
          <div className="text-[10rem] leading-none select-none pointer-events-none"
            style={{ color: "rgba(0,212,170,0.04)" }}
          >
            Ec
          </div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 w-full pb-32 pt-48">
          <div className="grid grid-cols-12 gap-4">
            {/* Main heading area */}
            <div className="col-span-12 lg:col-span-8">
              <FadeIn>
                <p className="label mb-4">
                  ▶ Ecology Communication Inc.
                </p>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="mb-6">
                  人と人、
                  <br />
                  企業と企業を
                  <br />
                  <span className="cursor-blink" style={{ color: "var(--color-accent)" }}>
                    つなぐ。
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <div className="pixel-card max-w-lg">
                  <p
                    className="text-xs leading-[2.2]"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    双方のビジネスが円滑に展開できる提案に注力し、
                    「よかった」「ありがとう」を沢山頂ける企業を目指しています。
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/company" className="pixel-btn">
                    会社概要を見る →
                  </Link>
                  <Link href="/service" className="pixel-btn pixel-btn-red">
                    業務内容 →
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Stats */}
            <div className="hidden lg:flex col-span-4 flex-col justify-end items-end gap-8">
              <FadeIn delay={3}>
                <div className="pixel-card text-right">
                  <p className="label mb-1">Since</p>
                  <p className="text-3xl" style={{ color: "var(--color-accent-3)" }}>
                    2011
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={4}>
                <div className="pixel-card text-right">
                  <p className="label mb-1">Location</p>
                  <p className="text-sm">
                    仙台市青葉区
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <hr className="pixel-divider" />
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section
        className="section-pad pixel-grid-bg"
        style={{ backgroundColor: "var(--color-base-light)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column */}
            <div>
              <FadeIn>
                <SectionFolio number="01" title="理念" subtitle="Philosophy" />
              </FadeIn>
              <FadeIn delay={1}>
                <div
                  className="pixel-border p-1"
                  style={{ display: "inline-block", width: "100%" }}
                >
                  <div
                    className="w-full h-64 lg:h-80 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-base-warm)" }}
                  >
                    {/* Pixel art scene representing Sendai */}
                    <div className="text-center">
                      <div className="text-6xl mb-2">🌳🏙️🌳</div>
                      <p className="text-xs" style={{ color: "var(--color-accent)" }}>
                        - SENDAI CITY -
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right column */}
            <div className="flex flex-col justify-center">
              <FadeIn delay={2}>
                <p className="text-base md:text-lg leading-[2.2] mb-8">
                  お付き合いする企業様のコストを
                  <br className="hidden md:block" />
                  徹底的に下げることに
                  <br className="hidden md:block" />
                  <span style={{ color: "var(--color-accent)" }}>全力を注ぎます。</span>
                </p>
              </FadeIn>
              <FadeIn delay={3}>
                <div className="pixel-card">
                  <p
                    className="text-xs leading-[2.4]"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    日々、急速な変化をしている情報社会で、クライアント様へは常に有益且つ、
                    正確な情報提供を徹底し、現在抱えている問題の解決に当事者意識をもって接していきます。
                  </p>
                  <p
                    className="text-xs leading-[2.4] mt-4"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    人と人、企業と企業をつなぎ、双方のビジネスが円滑に展開できる提案に注力し、
                    我々、エコロジーコミュニケーションとお付き合いできて、
                    「よかった」「ありがとう」を沢山頂ける企業を目指していきます。
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={4}>
                <div className="mt-8">
                  <Link href="/company" className="pixel-btn">
                    会社案内を見る →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Services Section ── */}
      <section className="section-pad pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="02" title="事業紹介" subtitle="Services" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i + 1}>
                <div className="pixel-card h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{service.icon}</span>
                    <span
                      className="text-2xl"
                      style={{ color: "var(--color-accent)", opacity: 0.4 }}
                    >
                      {service.number}
                    </span>
                  </div>
                  <p className="label mb-2">{service.subtitle}</p>
                  <h3 className="mb-4" style={{ color: "var(--color-accent)" }}>
                    {service.title}
                  </h3>
                  <p
                    className="text-xs leading-[2.2] flex-1"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    {service.description}
                  </p>
                  <hr className="pixel-divider-subtle my-4" />
                  <Link
                    href="/service"
                    className="text-xs hover:text-[var(--color-accent)] transition-colors"
                    style={{ color: "var(--color-accent)" }}
                  >
                    詳しく見る →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={4}>
            <div className="mt-12 text-center">
              <Link href="/service" className="pixel-btn">
                業務内容の詳細を見る →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── News Section ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-base-light)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <FadeIn>
                <SectionFolio number="03" title="新着情報" subtitle="News" />
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:col-start-5">
              {news.map((item, i) => (
                <FadeIn key={item.date} delay={i + 1}>
                  <Link
                    href="/news"
                    className="group flex gap-6 py-5 items-baseline transition-colors duration-200"
                    style={{
                      borderBottom: "2px dashed var(--color-border)",
                    }}
                  >
                    <time
                      className="text-xs shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {item.date}
                    </time>
                    <p className="text-xs group-hover:text-[var(--color-accent)] transition-colors">
                      {item.title}
                    </p>
                  </Link>
                </FadeIn>
              ))}
              <FadeIn delay={4}>
                <div className="mt-8">
                  <Link href="/news" className="pixel-btn">
                    すべてのお知らせ →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── CTA Section ── */}
      <section
        className="section-pad pixel-grid-bg"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <FadeIn>
            <p className="label mb-4">▶ Contact</p>
            <p className="text-lg md:text-xl mb-6 leading-[2]">
              お気軽に
              <br />
              お問い合わせください
            </p>
            <div className="pixel-card inline-block px-12 py-6 mb-6">
              <p
                className="text-2xl md:text-3xl tracking-widest"
                style={{ color: "var(--color-accent-3)" }}
              >
                022-226-8283
              </p>
            </div>
            <p
              className="text-xs"
              style={{ color: "var(--color-text-mid)" }}
            >
              営業時間 9:00 - 18:00（土日祝休）
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
