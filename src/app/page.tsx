import Link from "next/link";
import Image from "next/image";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "経費削減事業",
    subtitle: "Cost Reduction",
    description:
      "法人携帯・電気料金・WEB広告など、企業の固定費を徹底的に見直し、最適なプランをご提案します。",
  },
  {
    title: "物流事業",
    subtitle: "Logistics",
    description:
      "格安配送サービスから運送業者と荷主のマッチングまで、物流における課題を解決します。",
  },
  {
    title: "サービス事業",
    subtitle: "Business Service",
    description:
      "請求代行サービスなど、企業の業務効率化を支援するソリューションを提供します。",
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Vertical accent text */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
          <p className="vertical-text">
            人と人、企業と企業をつなぐ
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-32 pb-20">
          <div className="grid grid-cols-12 gap-4">
            {/* Main heading area - asymmetric */}
            <div className="col-span-12 lg:col-span-8">
              <FadeIn>
                <p className="label mb-6" style={{ color: "var(--color-accent)" }}>
                  Ecology Communication Inc.
                </p>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="font-[family-name:var(--font-noto-serif-jp)] mb-8">
                  人と人、
                  <br />
                  企業と企業を
                  <br />
                  <span style={{ color: "var(--color-accent)" }}>つなぐ。</span>
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <div className="max-w-md">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    双方のビジネスが円滑に展開できる提案に注力し、
                    「よかった」「ありがとう」を沢山頂ける企業を目指しています。
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="mt-12 flex gap-6 items-center">
                  <Link
                    href="/company"
                    className="inline-block border px-8 py-3 text-sm tracking-[0.08em] transition-all duration-300"
                    style={{
                      borderColor: "var(--color-text)",
                      color: "var(--color-text)",
                    }}
                  >
                    会社概要を見る
                  </Link>
                  <Link
                    href="/service"
                    className="link-hover text-sm tracking-[0.04em]"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    業務内容
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Hero Image - overlapping with text */}
            <div className="hidden lg:block col-span-4 relative">
              <FadeIn delay={2}>
                <div className="relative -ml-16 mt-8">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src="/images/hero-business.jpg"
                      alt="ビジネスイメージ"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 0vw, 33vw"
                      priority
                    />
                    {/* Paper texture overlay on image */}
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: "rgba(245,244,240,0.08)" }}
                    />
                  </div>
                  {/* Folio decoration overlapping image */}
                  <span
                    className="absolute -bottom-8 -right-8 font-[family-name:var(--font-cormorant)] text-[8rem] font-extralight leading-none select-none"
                    style={{ color: "rgba(26,26,26,0.06)" }}
                  >
                    Ec
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Bottom ruler */}
        <div className="absolute bottom-0 left-0 w-full">
          <hr className="ruler" />
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section
        className="section-pad relative"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-3">
              <FadeIn>
                <SectionFolio number="01" title="理念" subtitle="Philosophy" />
              </FadeIn>
              {/* Side image */}
              <FadeIn delay={2}>
                <div className="hidden lg:block mt-8 relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  <Image
                    src="/images/cost-consulting.jpg"
                    alt="経費削減コンサルティング"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <FadeIn delay={1}>
                <p className="font-[family-name:var(--font-noto-serif-jp)] text-xl md:text-2xl font-light leading-relaxed mb-8">
                  お付き合いする企業様のコストを
                  <br className="hidden md:block" />
                  徹底的に下げることに全力を注ぎます。
                </p>
              </FadeIn>
              <FadeIn delay={2}>
                <p
                  className="text-sm leading-[2]"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  日々、急速な変化をしている情報社会で、クライアント様へは常に有益且つ、
                  正確な情報提供を徹底し、現在抱えている問題の解決に当事者意識をもって接していきます。
                  人と人、企業と企業をつなぎ、双方のビジネスが円滑に展開できる提案に注力し、
                  我々、エコロジーコミュニケーションとお付き合いできて、
                  「よかった」「ありがとう」を沢山頂ける企業を目指していきます。
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Services Section ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionFolio number="02" title="事業紹介" subtitle="Services" />
          </FadeIn>

          {/* Wide image banner */}
          <FadeIn>
            <div className="grid grid-cols-12 gap-8 mb-16">
              <div className="col-span-12 lg:col-span-9 lg:col-start-3 relative overflow-hidden" style={{ height: "280px" }}>
                <Image
                  src="/images/office-desk.jpg"
                  alt="ビジネスコンサルティング"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 75vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(245,244,240,0.1)" }}
                />
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-12 gap-8 mt-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`col-span-12 ${
                  i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-4" : "md:col-span-3"
                }`}
              >
                <FadeIn delay={i + 1}>
                  <div
                    className="p-8 h-full"
                    style={{
                      borderLeft: "1px solid var(--color-border)",
                    }}
                  >
                    <p className="label mb-3">{service.subtitle}</p>
                    <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg mb-4">
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>

          <FadeIn delay={4}>
            <div className="mt-12">
              <Link
                href="/service"
                className="link-hover text-sm tracking-[0.08em]"
                style={{ color: "var(--color-accent)" }}
              >
                業務内容の詳細を見る
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── News Section ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <FadeIn>
                <SectionFolio number="03" title="新着情報" subtitle="News" />
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              {news.map((item, i) => (
                <FadeIn key={item.date} delay={i + 1}>
                  <div
                    className="flex gap-8 py-6 items-baseline"
                    style={{
                      borderBottom: "1px solid var(--color-border-light)",
                    }}
                  >
                    <time
                      className="text-xs tracking-[0.08em] shrink-0"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {item.date}
                    </time>
                    <p className="text-sm">{item.title}</p>
                  </div>
                </FadeIn>
              ))}
              <FadeIn delay={4}>
                <div className="mt-8">
                  <Link
                    href="/news"
                    className="link-hover text-sm tracking-[0.08em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    すべての新着情報を見る
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── CTA Section ── */}
      <section
        className="section-pad text-center"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="label mb-6">Contact</p>
            <p className="font-[family-name:var(--font-noto-serif-jp)] text-2xl md:text-3xl font-light mb-4">
              お気軽にお問い合わせください
            </p>
            <p
              className="text-sm mb-8"
              style={{ color: "var(--color-text-mid)" }}
            >
              TEL: 022-226-8283
            </p>
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
