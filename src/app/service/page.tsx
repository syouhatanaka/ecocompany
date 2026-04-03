import type { Metadata } from "next";
import Image from "next/image";
import SectionFolio from "@/components/SectionFolio";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "業務内容",
};

const costReduction = [
  {
    title: "法人携帯コスト削減",
    description:
      "携帯電話のコストは最もわかりづらいですが実は大幅なコスト削減が見込めます。お客様の利用用途のヒアリングから適正プランを選出し、法人契約専用のプランでお客様のコスト削減にご提案致します。",
  },
  {
    title: "電気料金削減",
    description:
      "電気料金は事業を継続する限り必ずかかるコスト部分です。弊社は「新電力」サービスのご提案によりコストダウンを図ることが可能です。電気の利用方法は従来と変わりません。現在、多数の新電力会社が存在しており、弊社は複数社相見積もりをお出しすることが可能です。",
  },
  {
    title: "WEB広告",
    description:
      "近年、広告方法は大きな変化をみせており、紙媒体からweb媒体へシフトしております。弊社は世の中のニーズに合わせた企業広告の斡旋をご提案し、現在の広告費、求人費用の削減、新たな広告スキームの展開にお力添えできるよう尽力致します。",
  },
];

const logistics = [
  {
    title: "運送物配送業",
    description:
      "格安で配送させていただきます。スポット便・定期便、大歓迎です。お困りでしたらまずはお問合せください。",
  },
  {
    title: "運送サービス斡旋事業",
    description:
      "軽貨物運送業者を見つけたい「企業様」・ドライバーを探している「荷主様」と、荷物を運びたい「ドライバー様」をつなぎ、必要な時に必要なだけ、荷物の配送を依頼したり、運ぶことができます。また倉庫管理、システム管理にお困みの企業様へ、問題解決に貢献させていただきます。",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="pt-72 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <FadeIn>
                <p className="label mb-4" style={{ color: "var(--color-accent)" }}>
                  Service
                </p>
                <h1 className="font-[family-name:var(--font-noto-serif-jp)]">業務内容</h1>
              </FadeIn>
            </div>
            <div className="hidden lg:flex col-span-5 items-end justify-end">
              <p className="vertical-text">経費削減・物流・サービス事業</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Cost Reduction ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-28">
            <div className="col-span-12 lg:col-span-4">
              <FadeIn>
                <SectionFolio number="01" title="経費削減事業" subtitle="Cost Reduction" />
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <FadeIn delay={1}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src="/images/cost-consulting.jpg"
                    alt="経費削減コンサルティング"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {costReduction.map((item, i) => (
              <FadeIn key={item.title} delay={i + 1}>
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                  <div className="col-span-12 lg:col-span-3">
                    <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg lg:text-xl leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                  <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                    <p
                      className="text-sm leading-[2.2]"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                {i < costReduction.length - 1 && (
                  <hr className="ruler mt-16 lg:mt-20" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Logistics ── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-base-warm)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-20 lg:mb-28">
            <div className="col-span-12 lg:col-span-5">
              <FadeIn>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src="/images/logistics.jpg"
                    alt="物流・配送イメージ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-7 flex items-center">
              <FadeIn delay={1}>
                <SectionFolio number="02" title="物流事業" subtitle="Logistics" />
              </FadeIn>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {logistics.map((item, i) => (
              <FadeIn key={item.title} delay={i + 1}>
                <div className="grid grid-cols-12 gap-8 lg:gap-12">
                  <div className="col-span-12 lg:col-span-3">
                    <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg lg:text-xl leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                  <div className="col-span-12 lg:col-span-7 lg:col-start-5">
                    <p
                      className="text-sm leading-[2.2]"
                      style={{ color: "var(--color-text-mid)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
                {i < logistics.length - 1 && (
                  <hr className="ruler mt-16 lg:mt-20" />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <hr className="ruler" />

      {/* ── Business Service ── */}
      <section className="section-pad">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <FadeIn>
            <SectionFolio number="03" title="サービス事業" subtitle="Business Service" />
          </FadeIn>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-16 lg:mt-20">
            <div className="col-span-12 lg:col-span-3">
              <FadeIn delay={1}>
                <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg lg:text-xl leading-relaxed">
                  請求代行サービス
                </h3>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-5">
              <FadeIn delay={2}>
                <p
                  className="text-sm leading-[2.2]"
                  style={{ color: "var(--color-text-mid)" }}
                >
                  企業様の顧客から料金を集金する代行業務を請け負っております。
                  業務過多を減らし、未収金企業様への連絡、及び集金催促も請け負っております。
                  最小1件から受けたまわらせていただけます。
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
