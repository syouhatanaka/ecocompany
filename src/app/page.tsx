import Link from "next/link";
import Image from "next/image";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    number: "01",
    title: "経費削減事業",
    subtitle: "Cost Reduction",
    description:
      "法人携帯・電気料金・WEB広告など、企業の固定費を徹底的に見直し、最適なプランをご提案します。",
    image: "/images/cost-consulting.jpg",
  },
  {
    number: "02",
    title: "物流事業",
    subtitle: "Logistics",
    description:
      "格安配送サービスから運送業者と荷主のマッチングまで、物流における課題を解決します。",
    image: "/images/logistics.jpg",
  },
  {
    number: "03",
    title: "サービス事業",
    subtitle: "Business Service",
    description:
      "請求代行サービスなど、企業の業務効率化を支援するソリューションを提供します。",
    image: "/images/office-desk.jpg",
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
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-business.jpg"
            alt="モダンオフィス"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(245,244,240,0.92) 0%, rgba(245,244,240,0.6) 40%, rgba(245,244,240,0.85) 100%)",
            }}
          />
        </div>

        {/* Vertical accent text */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10">
          <p className="vertical-text">人と人、企業と企業をつなぐ</p>
        </div>

        {/* Large decorative type */}
        <div className="absolute top-28 right-8 lg:right-24 z-[1] select-none pointer-events-none">
          <span
            className="font-[family-name:var(--font-cormorant)] text-[12rem] lg:text-[20rem] font-extralight leading-none"
            style={{ color: "rgba(26,26,26,0.03)" }}
          >
            Ec
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-24 pt-48">
          <div className="grid grid-cols-12 gap-4">
            {/* Main heading area */}
            <div className="col-span-12 lg:col-span-7">
              <FadeIn>
                <p
                  className="label mb-6"
                  style={{ color: "var(--color-accent)" }}
                >
                  Ecology Communication Inc.
                </p>
              </FadeIn>

              <FadeIn delay={1}>
                <h1 className="font-[family-name:var(--font-noto-serif-jp)] mb-10">
                  人と人、
                  <br />
                  企業と企業を
                  <br />
                  <span style={{ color: "var(--color-accent)" }}>つなぐ。</span>
                </h1>
              </FadeIn>

              <FadeIn delay={2}>
                <div className="max-w-lg">
                  <p
                    className="text-sm leading-[2]"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    双方のビジネスが円滑に展開できる提案に注力し、
                    「よかった」「ありがとう」を沢山頂ける企業を目指しています。
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={3}>
                <div className="mt-14 flex gap-8 items-center">
                  <Link
                    href="/company"
                    className="inline-block border px-10 py-4 text-sm tracking-[0.08em] transition-all duration-300 hover:bg-[var(--color-text)] hover:text-[var(--color-base)]"
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

            {/* Stats / Key figures */}
            <div className="hidden lg:flex col-span-5 flex-col justify-end items-end gap-12">
              <FadeIn delay={3}>
                <div className="text-right">
                  <p className="label mb-2">Since</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-5xl font-light">
                    2019
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={4}>
                <div className="text-right">
                  <p className="label mb-2">Location</p>
                  <p className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-light">
                    仙台市青葉区
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Bottom ruler */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <hr className="ruler" />
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section
        className="section-pad relative overflow-hidden"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Left column: folio + image */}
            <div className="col-span-12 lg:col-span-5">
              <FadeIn>
                <SectionFolio number="01" title="理念" subtitle="Philosophy" />
              </FadeIn>
              <FadeIn delay={1}>
                <div
                  className="relative overflow-hidden mt-4"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src="/images/sendai-city.jpg"
                    alt="仙台の街並み"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "rgba(245,244,240,0.06)" }}
                  />
                </div>
              </FadeIn>
            </div>

            {/* Right column: text content */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
              <FadeIn delay={2}>
                <p className="font-[family-name:var(--font-noto-serif-jp)] text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-10">
                  お付き合いする企業様のコストを
                  <br className="hidden md:block" />
                  徹底的に下げることに
                  <br className="hidden md:block" />
                  全力を注ぎます。
                </p>
              </FadeIn>
              <FadeIn delay={3}>
                <p
                  className="text-sm leading-[2] max-w-lg"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  日々、急速な変化をしている情報社会で、クライアント様へは常に有益且つ、
                  正確な情報提供を徹底し、現在抱えている問題の解決に当事者意識をもって接していきます。
                </p>
              </FadeIn>
              <FadeIn delay={4}>
                <p
                  className="text-sm leading-[2] mt-6 max-w-lg"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  人と人、企業と企業をつなぎ、双方のビジネスが円滑に展開できる提案に注力し、
                  我々、エコロジーコミュニケーションとお付き合いできて、
                  「よかった」「ありがとう」を沢山頂ける企業を目指していきます。
                </p>
              </FadeIn>
              <FadeIn delay={5}>
                <div className="mt-10">
                  <Link
                    href="/company"
                    className="link-hover text-sm tracking-[0.08em]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    会社案内を見る
                  </Link>
                </div>
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

          {/* Service items - editorial staggered layout */}
          <div className="mt-8 space-y-24 lg:space-y-32">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={1}>
                <div
                  className={`grid grid-cols-12 gap-6 lg:gap-8 items-center ${
                    i % 2 === 1 ? "direction-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`col-span-12 lg:col-span-7 ${
                      i % 2 === 1
                        ? "lg:col-start-6 lg:order-2"
                        : "lg:order-1"
                    }`}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: "16/10" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: "rgba(245,244,240,0.06)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`col-span-12 lg:col-span-4 ${
                      i % 2 === 1
                        ? "lg:col-start-1 lg:order-1"
                        : "lg:col-start-9 lg:order-2"
                    }`}
                  >
                    <span
                      className="font-[family-name:var(--font-cormorant)] text-6xl lg:text-7xl font-extralight block mb-4"
                      style={{ color: "rgba(26,26,26,0.06)" }}
                    >
                      {service.number}
                    </span>
                    <p className="label mb-3">{service.subtitle}</p>
                    <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-xl lg:text-2xl mb-5">
                      {service.title}
                    </h3>
                    <p
                      className="text-sm leading-[2]"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={2}>
            <div className="mt-20 text-center">
              <Link
                href="/service"
                className="inline-block border px-10 py-4 text-sm tracking-[0.08em] transition-all duration-300 hover:bg-[var(--color-text)] hover:text-[var(--color-base)]"
                style={{
                  borderColor: "var(--color-text)",
                  color: "var(--color-text)",
                }}
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
                  <Link
                    href="/news"
                    className="group flex gap-8 py-7 items-baseline transition-colors duration-300"
                    style={{
                      borderBottom: "1px solid var(--color-border-light)",
                    }}
                  >
                    <time
                      className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.04em] shrink-0"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {item.date}
                    </time>
                    <p className="text-sm group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {item.title}
                    </p>
                  </Link>
                </FadeIn>
              ))}
              <FadeIn delay={4}>
                <div className="mt-10">
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
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="grid grid-cols-12 min-h-[480px]">
          {/* Left: decorative image */}
          <div className="hidden lg:block col-span-5 relative">
            <Image
              src="/images/sendai-city.jpg"
              alt="仙台"
              fill
              className="object-cover"
              sizes="42vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(232,230,225,1) 100%)",
              }}
            />
          </div>

          {/* Right: contact info */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-center section-pad px-6 md:px-12">
            <FadeIn>
              <p className="label mb-6">Contact</p>
              <p className="font-[family-name:var(--font-noto-serif-jp)] text-2xl md:text-3xl font-light mb-6 leading-relaxed">
                お気軽に
                <br />
                お問い合わせください
              </p>
              <p
                className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-4 tracking-wide"
                style={{ color: "var(--color-text)" }}
              >
                022-226-8283
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--color-text-mid)" }}
              >
                営業時間 9:00 - 18:00（土日祝休）
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
