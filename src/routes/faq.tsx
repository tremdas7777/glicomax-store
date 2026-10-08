import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { FaqSection, CtaFinal } from "@/components/site/sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes | Oxímetro de Dedo GlicoMax" },
      {
        name: "description",
        content:
          "Tire dúvidas sobre o oxímetro de dedo GlicoMax: como usar, o que ele mede, o que pode atrapalhar a leitura, kits, envio e garantia.",
      },
      { property: "og:title", content: "Perguntas frequentes sobre o oxímetro GlicoMax" },
      {
        property: "og:description",
        content: "Saiba como funciona o oxímetro de dedo GlicoMax, os kits e o envio.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: () => (
    <SiteLayout>
      <FaqSection />
      <CtaFinal />
    </SiteLayout>
  ),
});
