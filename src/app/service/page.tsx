import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "業務内容",
};

const services = [
  {
    number: "01",
    category: "Cost Reduction",
    title: "経費削減事業",
    lead: "見えにくいコストを可視化し、最適なプランで削減をご提案します。",
    image: "/images/cost-consulting.jpg",
    imageAlt: "経費削減コンサルティング",
    items: [
      {
        name: "法人携帯コスト削減",
        text: "携帯電話のコストは最もわかりづらいですが実は大幅なコスト削減が見込めます。お客様の利用用途のヒアリングから適正プランを選出し、法人契約専用のプランでお客様のコスト削減にご提案致します。",
      },
      {
        name: "電気料金削減",
        text: "電気料金は事業を継続する限り必ずかかるコスト部分です。弊社は「新電力」サービスのご提案によりコストダウンを図ることが可能です。電気の利用方法は従来と変わりません。現在、多数の新電力会社が存在しており、弊社は複数社相見積もりをお出しすることが可能です。",
      },
      {
        name: "WEB広告",
        text: "近年、広告方法は大きな変化をみせており、紙媒体からweb媒体へシフトしております。弊社は世の中のニーズに合わせた企業広告の斡旋をご提案し、現在の広告費、求人費用の削減、新たな広告スキームの展開にお力添えできるよう尽力致します。",
      },
    ],
  },
  {
    number: "02",
    category: "Logistics",
    title: "物流事業",
    lead: "必要な時に必要なだけ。柔軟な配送ネットワークでお応えします。",
    image: "/images/logistics.jpg",
    imageAlt: "物流・配送イメージ",
    items: [
      {
        name: "運送物配送業",
        text: "格安で配送させていただきます。スポット便・定期便、大歓迎です。お困りでしたらまずはお問合せください。",
      },
      {
        name: "運送サービス斡旋事業",
        text: "軽貨物運送業者を見つけたい「企業様」・ドライバーを探している「荷主様」と、荷物を運びたい「ドライバー様」をつなぎ、必要な時に必要なだけ、荷物の配送を依頼したり、運ぶことができます。また倉庫管理、システム管理にお困みの企業様へ、問題解決に貢献させていただきます。",
      },
    ],
  },
  {
    number: "03",
    category: "Business Service",
    title: "サービス事業",
    lead: "バックオフィス業務の負担を軽減し、本業に集中できる環境を。",
    image: null,
    imageAlt: "",
    items: [
      {
        name: "請求代行サービス",
        text: "企業様の顧客から料金を集金する代行業務を請け負っております。業務過多を減らし、未収金企業様への連絡、及び集金催促も請け負っております。最小1件から受けたまわらせていただけます。",
      },
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-72 pb-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p
              className="label mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Service
            </p>
            <h1 className="font-[family-name:var(--font-noto-serif-jp)] mb-6">
              業務内容
            </h1>
            <p
              className="text-base max-w-[600px] leading-[2]"
              style={{ color: "var(--color-text-mid)" }}
            >
              エコロジーコミュニケーションは、経費削減・物流・サービス事業の
              3つの柱で、企業様の課題解決をサポートいたします。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, sIdx) => (
        <section
          key={service.number}
          className="py-20 md:py-28"
          style={{
            backgroundColor:
              sIdx % 2 === 1 ? "var(--color-base-warm)" : "transparent",
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            {/* Section heading */}
            <FadeIn>
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="font-[family-name:var(--font-cormorant)] text-6xl md:text-7xl font-extralight"
                  style={{ color: "var(--color-accent)", opacity: 0.25 }}
                >
                  {service.number}
                </span>
                <span
                  className="label"
                  style={{ color: "var(--color-accent)" }}
                >
                  {service.category}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-2xl md:text-3xl mb-4">
                {service.title}
              </h2>
              <p
                className="text-sm md:text-base leading-[2] mb-12 max-w-[640px]"
                style={{ color: "var(--color-text-mid)" }}
              >
                {service.lead}
              </p>
            </FadeIn>

            {/* Image (if exists) */}
            {service.image && (
              <FadeIn delay={1}>
                <div
                  className="relative overflow-hidden rounded-lg mb-16"
                  style={{ aspectRatio: "21/9" }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1100px) 100vw, 1100px"
                  />
                </div>
              </FadeIn>
            )}

            {/* Service items as cards */}
            <div
              className={`grid gap-6 md:gap-8 ${
                service.items.length === 1
                  ? "grid-cols-1 max-w-[640px]"
                  : service.items.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {service.items.map((item, i) => (
                <FadeIn key={item.name} delay={i + 1}>
                  <div
                    className="p-8 md:p-10 rounded-lg h-full flex flex-col"
                    style={{
                      backgroundColor:
                        sIdx % 2 === 1
                          ? "var(--color-base)"
                          : "var(--color-base-warm)",
                      border: "1px solid var(--color-border-light)",
                    }}
                  >
                    <div
                      className="flex items-center gap-3 mb-6 pb-5"
                      style={{
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--color-accent)" }}
                      />
                      <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg md:text-xl font-normal">
                        {item.name}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-[2.2] flex-1"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <p
              className="label mb-4"
              style={{ color: "var(--color-accent)" }}
            >
              Contact
            </p>
            <h2 className="font-[family-name:var(--font-noto-serif-jp)] text-xl md:text-2xl mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p
              className="text-sm leading-[2] mb-10 max-w-[480px] mx-auto"
              style={{ color: "var(--color-text-mid)" }}
            >
              各サービスについてのご質問・お見積もりなど、
              お気軽にお問い合わせください。
            </p>
            <a
              href="/company"
              className="inline-block px-10 py-4 text-sm tracking-widest text-white rounded"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              会社案内を見る
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
