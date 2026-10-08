import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { FREE_SHIPPING_LABEL } from "@/lib/bundles";
import { HeroBanner } from "@/components/site/HeroBanner";
import {
  HowItWorks, AppSplit, Comparison, Plans, TrustProofSection, IdealForSection, ProductUsageSection,
  EditorialQuote, FaqSection, CtaFinal,
} from "@/components/site/sections";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oxímetro de Dedo GlicoMax | SpO2 e Batimentos em Segundos" },
      {
        name: "description",
        content:
          "Oxímetro de dedo GlicoMax: saturação de oxigênio (SpO2) e frequência cardíaca em segundos, com tela colorida e um botão só. Kits de 1 a 3 unidades.",
      },
      { property: "og:title", content: "Oxímetro de Dedo GlicoMax | SpO2 e Batimentos em Segundos" },
      {
        property: "og:description",
        content: `Oxímetro de dedo GlicoMax para medir saturação e batimentos em casa, sem picada e sem aplicativo. ${FREE_SHIPPING_LABEL} para todo o Brasil.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <HeroBanner />
      <SeoIntro />
      <TrustProofSection />
      <IdealForSection />
      <HowItWorks />
      <ProductUsageSection />
      <AppSplit />

      <Comparison />
      <Plans />
      <EditorialQuote />
      <FaqSection limit={6} />
      <CtaFinal />
    </SiteLayout>
  );
}

function SeoIntro() {
  return (
    <section className="border-b border-[rgba(13,13,13,0.08)] bg-white py-12 md:py-16">
      <div className="container-edge max-w-4xl">
        <p className="eyebrow text-[var(--primary)] mb-4">Oxímetro de dedo GlicoMax</p>
        <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance">
          Saturação de oxigênio e batimentos na ponta do dedo, em segundos.
        </h2>
        <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--ink)]/70">
          O GlicoMax é um oxímetro de dedo para acompanhar em casa a saturação de oxigênio no sangue (SpO2) e a
          frequência cardíaca. É só colocar o dedo e apertar o botão: os números aparecem na tela colorida, sem
          picada e sem aplicativo. Escolha kits de 1 a 3 unidades.
        </p>
      </div>
    </section>
  );
}
