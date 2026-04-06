import type { Metadata } from "next";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "業務内容",
};

const costReduction = [
  {
    title: "法人携帯コスト削減",
    icon: "📱",
    description:
      "携帯電話のコストは最もわかりづらいですが実は大幅なコスト削減が見込めます。お客様の利用用途のヒアリングから適正プランを選出し、法人契約専用のプランでお客様のコスト削減にご提案致します。",
  },
  {
    title: "電気料金削減",
    icon: "⚡",
    description:
      "電気料金は事業を継続する限り必ずかかるコスト部分です。弊社は「新電力」サービスのご提案によりコストダウンを図ることが可能です。電気の利用方法は従来と変わりません。現在、多数の新電力会社が存在しており、弊社は複数社相見積もりをお出しすることが可能です。",
  },
  {
    title: "WEB広告",
    icon: "🌐",
    description:
      "近年、広告方法は大きな変化をみせており、紙媒体からweb媒体へシフトしております。弊社は世の中のニーズに合わせた企業広告の斡旋をご提案し、現在の広告費、求人費用の削減、新たな広告スキームの展開にお力添えできるよう尽力致します。",
  },
];

const logistics = [
  {
    title: "運送物配送業",
    icon: "🚚",
    description:
      "格安で配送させていただきます。スポット便・定期便、大歓迎です。お困りでしたらまずはお問合せください。",
  },
  {
    title: "運送サービス斡旋事業",
    icon: "🤝",
    description:
      "軽貨物運送業者を見つけたい「企業様」・ドライバーを探している「荷主様」と、荷物を運びたい「ドライバー様」をつなぎ、必要な時に必要なだけ、荷物の配送を依頼したり、運ぶことができます。また倉庫管理、システム管理にお困みの企業様へ、問題解決に貢献させていただきます。",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-40 pb-16 pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="label mb-4">▶ Service</p>
            <h1 className="mb-4">業務内容</h1>
            <p className="text-xs" style={{ color: "var(--color-text-mid)" }}>
              経費削減・物流・サービス事業の3つの柱で企業様をサポートします。
            </p>
          </FadeIn>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Cost Reduction ── */}
      <section className="section-pad pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="01" title="経費削減事業" subtitle="Cost Reduction" />
          </FadeIn>

          <FadeIn delay={1}>
            <div className="pixel-card mb-8 flex items-center gap-4">
              <span className="text-3xl">💰</span>
              <p className="text-xs leading-[2.2]" style={{ color: "var(--color-text-mid)" }}>
                見えにくいコストを可視化し、最適なプランで企業様のコスト削減をご提案します。
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costReduction.map((item, i) => (
              <FadeIn key={item.title} delay={i + 2}>
                <div className="pixel-card h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 style={{ color: "var(--color-accent)" }}>{item.title}</h3>
                  </div>
                  <hr className="pixel-divider-subtle mb-4" />
                  <p
                    className="text-xs leading-[2.4] flex-1"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Logistics ── */}
      <section
        className="section-pad pixel-grid-bg"
        style={{ backgroundColor: "var(--color-base-light)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="02" title="物流事業" subtitle="Logistics" />
          </FadeIn>

          <FadeIn delay={1}>
            <div className="pixel-card mb-8 flex items-center gap-4">
              <span className="text-3xl">📦</span>
              <p className="text-xs leading-[2.2]" style={{ color: "var(--color-text-mid)" }}>
                必要な時に必要なだけ。柔軟な配送ネットワークでお応えします。
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {logistics.map((item, i) => (
              <FadeIn key={item.title} delay={i + 2}>
                <div className="pixel-card h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 style={{ color: "var(--color-accent)" }}>{item.title}</h3>
                  </div>
                  <hr className="pixel-divider-subtle mb-4" />
                  <p
                    className="text-xs leading-[2.4] flex-1"
                    style={{ color: "var(--color-text-mid)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── Business Service ── */}
      <section className="section-pad pixel-grid-bg">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <SectionFolio number="03" title="サービス事業" subtitle="Business Service" />
          </FadeIn>

          <div className="max-w-2xl">
            <FadeIn delay={1}>
              <div className="pixel-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">📋</span>
                  <h3 style={{ color: "var(--color-accent)" }}>請求代行サービス</h3>
                </div>
                <hr className="pixel-divider-subtle mb-4" />
                <p
                  className="text-xs leading-[2.4]"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  企業様の顧客から料金を集金する代行業務を請け負っております。
                  業務過多を減らし、未収金企業様への連絡、及び集金催促も請け負っております。
                  最小1件から受けたまわらせていただけます。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <hr className="pixel-divider" />

      {/* ── CTA ── */}
      <section
        className="section-pad pixel-grid-bg text-center"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <FadeIn>
            <p className="label mb-4">▶ Contact</p>
            <p className="text-base mb-6">まずはお気軽にご相談ください</p>
            <a href="/company" className="pixel-btn">
              会社案内を見る →
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
