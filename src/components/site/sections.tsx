import { Link } from "@tanstack/react-router";
import { brand } from "@/lib/brand";
import {
  availableBundles as bundleData,
  brl as fmt,
  bundleDurationLabel,
  bundleShippingLabel,
  FREE_SHIPPING_LABEL,
  FREE_SHIPPING_MIN,
  unitsLabel,
} from "@/lib/bundles";
import { homeImages } from "@/lib/product-images";
import { StoreImage } from "@/components/site/StoreImage";
import { trackCheckoutClick } from "@/lib/analytics";
import usePasso1 from "@/assets/glicomax-passo-01.jpg";
import usePasso2 from "@/assets/glicomax-passo-02.jpg";
import usePasso3 from "@/assets/glicomax-passo-03.jpg";
import usePasso4 from "@/assets/glicomax-passo-04.jpg";

const { bannerWide, heroSensor, appIphone, lifestyleRunning } = homeImages;

/* ---------- Editorial immersive banner ---------- */
export function EditorialBanner() {
  return (
    <section className="relative w-full">
      <div className="relative w-full">
        <StoreImage
          srcMobile={bannerWide.mobile}
          srcDesktop={bannerWide.desktop}
          alt="Oxímetro GlicoMax — saturação e batimentos em segundos"
          variant="section-banner"
          bg={brand.colors.primaryDeep}
          loading="lazy"
        />
      </div>
      <div className="container-edge py-10 md:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <span className="eyebrow text-[var(--ink)]/60">
          Kits de 1 a 3 unidades · SpO2 e batimentos · Tela colorida
        </span>
        <div className="flex items-center gap-4">
          <span className="rule" />
          <Link
            to="/produto"
            className="text-xs font-bold uppercase tracking-[0.18em] hover:text-[var(--primary)] transition-colors"
          >
            Conhecer o oxímetro
          </Link>
        </div>
      </div>
    </section>
  );
}


/* ---------- Hero — 8/4 editorial split, oversized serif ---------- */
export function Hero() {
  return (
    <section className="pt-28 sm:pt-32 md:pt-44 lg:pt-48 pb-16 md:pb-28">
      <div className="container-edge">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8 fade-up">
            <span className="eyebrow text-[var(--primary)] mb-5 sm:mb-6 block">
              {brand.tagline}
            </span>
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight text-balance">
              Saturação <br />e batimentos <br />
              <span className="italic">em segundos.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2 fade-up" style={{ animationDelay: "120ms" }}>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[var(--ink)]/70 mb-8 sm:mb-10 max-w-sm">
              Coloque o dedo, aperte o botão e veja os números na tela. Sem picada, sem aplicativo.
            </p>
            <div className="flex items-center gap-6">
              <span className="rule" />
              <a href="#tecnologia" className="text-xs font-bold uppercase tracking-[0.18em] hover:text-[var(--primary)] transition-colors">
                Ver como funciona
              </a>
            </div>
            <div className="mt-12 hidden lg:block">
              <StoreImage
                srcMobile={heroSensor.mobile}
                srcDesktop={heroSensor.desktop}
                alt="Oxímetro de dedo GlicoMax"
                variant="section-content"
                bg={brand.colors.surfaceTint}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Hero figure on mobile/tablet — full image, no cropping */}
        <div className="lg:hidden mt-12 sm:mt-16">
          <StoreImage
            srcMobile={heroSensor.mobile}
            srcDesktop={heroSensor.desktop}
            alt="Oxímetro de dedo GlicoMax mostrando SpO2 e batimentos"
            variant="section-content"
            bg={brand.colors.surfaceTint}
          />
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  {
    title: "Compra segura",
    text: "Pagamento em ambiente protegido, com confirmação automática do seu pedido.",
  },
  {
    title: "Frete grátis",
    text: `Envio com rastreamento para todo o Brasil, sem custo nas compras acima de ${fmt(FREE_SHIPPING_MIN)}.`,
  },
  {
    title: "Garantia de 7 dias",
    text: "Você tem direito de arrependimento conforme o Código de Defesa do Consumidor.",
  },
  {
    title: "Suporte humano",
    text: "Ajuda para escolher o kit, acompanhar o envio e tirar dúvidas sobre o uso do oxímetro.",
  },
] as const;

export function TrustProofSection() {
  return (
    <section className="border-y border-[rgba(13,13,13,0.08)] bg-white py-12 md:py-16">
      <div className="container-edge">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-[rgba(13,13,13,0.08)] bg-[rgba(13,13,13,0.08)] md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="bg-white p-6 md:p-7">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--primary)]">
                {item.title}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/65">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const idealFor = [
  "Quer conferir a saturação de oxigênio em casa, de forma rápida e sem picada.",
  "Acompanha os batimentos no dia a dia ou depois de atividades físicas.",
  "Cuida de familiares e quer um aparelho simples para ter sempre por perto.",
  "Gosta de anotar os números para conversar com o médico nas consultas.",
] as const;

export function IdealForSection() {
  return (
    <section className="bg-[var(--paper)] py-20 md:py-28">
      <div className="container-edge grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow text-[var(--primary)]">Para quem é indicado</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight text-balance">
            Mais tranquilidade para quem quer acompanhar de perto.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[rgba(13,13,13,0.08)] bg-[rgba(13,13,13,0.08)] sm:grid-cols-2">
            {idealFor.map((item, index) => (
              <div key={item} className="bg-white p-7">
                <span className="font-display text-4xl italic text-[var(--primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--ink)]/75">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-[var(--ink)]/45">
            O oxímetro GlicoMax é para acompanhamento em casa e não substitui avaliação médica. Em caso de falta de ar ou
            mal-estar, procure atendimento.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section header (numbered editorial) ---------- */
function NumberedHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 md:gap-6 mb-16 md:mb-24">
      <span className="font-display italic text-4xl md:text-6xl text-[var(--ink)]/80">{number} —</span>
      <h2 className="font-display text-4xl md:text-6xl text-balance">{title}</h2>
    </div>
  );
}

/* ---------- 01 — Como funciona ---------- */
const steps = [
  { n: "01", title: "Coloque o dedo", text: "Abra o clipe e encaixe o dedo indicador ou médio até o fim, com a unha para cima." },
  { n: "02", title: "Aperte o botão", text: "O oxímetro liga com um toque — sem aplicativo, sem cadastro e sem configuração." },
  { n: "03", title: "Aguarde alguns segundos", text: "Fique parado enquanto ele lê a luz que atravessa a ponta do dedo." },
  { n: "04", title: "Veja os números", text: "A saturação (SpO2) e os batimentos por minuto aparecem na tela colorida." },
];

export function HowItWorks() {
  return (
    <section id="tecnologia" className="py-24 md:py-32 border-t border-[rgba(13,13,13,0.1)]">
      <div className="container-edge">
        <NumberedHeader number="01" title="Como funciona" />
        <div className="grid md:grid-cols-4 gap-10 md:gap-12">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]/30 group-hover:text-[var(--primary)] transition-colors">
                Passo {s.n}
              </span>
              <h3 className="text-lg md:text-xl font-medium mt-4 mb-4">{s.title}</h3>
              <p className="text-sm text-[var(--ink)]/60 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const usageGuides = [
  {
    src: usePasso1,
    alt: "Passo 1: aperte a parte de trás do oxímetro GlicoMax para abrir o clipe",
    title: "Abrir o clipe",
  },
  {
    src: usePasso2,
    alt: "Passo 2: coloque o dedo indicador ou médio no oxímetro GlicoMax",
    title: "Colocar o dedo",
  },
  {
    src: usePasso3,
    alt: "Passo 3: aperte o botão e aguarde alguns segundos",
    title: "Ligar e aguardar",
  },
  {
    src: usePasso4,
    alt: "Passo 4: leia a saturação (SpO2) e os batimentos na tela",
    title: "Ler os números",
  },
] as const;

export function ProductUsageSection() {
  return (
    <section id="como-usar" className="bg-white py-24 md:py-32 border-t border-[rgba(13,13,13,0.1)]">
      <div className="container-edge">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="eyebrow text-[var(--primary)]">Como utilizar o produto</span>
          <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight text-balance">
            Coloque, aperte e leia: pronto em segundos.
          </h2>
          <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--ink)]/65">
            Siga os quatro passos abaixo para fazer a medição. Para uma leitura estável, mantenha a mão parada, aquecida e
            apoiada na altura do peito.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {usageGuides.map((guide) => (
            <figure
              key={guide.title}
              className="overflow-hidden rounded-2xl border border-[rgba(13,13,13,0.08)] bg-[var(--paper)]"
            >
              <img
                src={guide.src}
                alt={guide.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
              <figcaption className="border-t border-[rgba(13,13,13,0.08)] bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink)]/50">
                {guide.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 02 — Recursos (imagem / lista) ---------- */
const intel = [
  "Saturação de oxigênio (SpO2)",
  "Frequência cardíaca (bpm)",
  "Barra de intensidade do pulso",
  "Tela colorida de fácil leitura",
  "Compacto: 5,7 × 3,1 × 3 cm",
];

export function AppSplit() {
  return (
    <section id="ciencia" className="bg-white py-24 md:py-32">
      <div className="container-edge grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="order-2 lg:order-1 w-full">
          <StoreImage
            srcMobile={appIphone.mobile}
            srcDesktop={appIphone.desktop}
            alt="Medidas do oxímetro GlicoMax: 5,7 × 3,1 × 3 cm"
            variant="section-full"
            bg="#ffffff"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <NumberedHeader number="02" title="Recursos" />
          <p className="font-display italic text-xl md:text-2xl text-[var(--ink)]/80 mb-12 leading-snug max-w-md">
            "Números grandes e coloridos: a saturação em cima, os batimentos embaixo."
          </p>
          <ul>
            {intel.map((t) => (
              <li key={t} className="flex items-start gap-4 border-b border-[rgba(13,13,13,0.06)] py-6">
                <span className="text-[var(--primary)] font-bold leading-none mt-0.5">+</span>
                <span className="text-xs md:text-sm uppercase tracking-[0.18em] font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 — Comparison editorial table ---------- */
const compRows = [
  ["Saturação de oxigênio (SpO2)", true, false],
  ["Batimentos por minuto", true, true],
  ["Resultado em segundos", true, false],
  ["Sem contar no relógio", true, false],
  ["Indicador de intensidade do pulso", true, false],
  ["Números na tela", true, false],
] as const;

export function Comparison() {
  return (
    <section className="py-24 md:py-32 border-t border-[rgba(13,13,13,0.1)]">
      <div className="container-edge">
        <NumberedHeader number="03" title="GlicoMax vs Contar o Pulso" />
        <p className="mb-10 max-w-2xl text-sm md:text-base leading-relaxed text-[var(--ink)]/65">
          Contar o pulso no relógio dá trabalho e não mostra a saturação de oxigênio. O GlicoMax mostra os dois números na
          tela em poucos segundos.
        </p>
        <div className="border border-[rgba(13,13,13,0.1)] rounded-xl overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] text-[var(--ink)]/40 py-5 border-b border-[rgba(13,13,13,0.1)]">
            <div>Recurso</div>
            <div className="text-center px-4 md:px-0">GlicoMax</div>
            <div className="text-center px-4 md:px-0">No relógio</div>
          </div>
          {compRows.map(([f, a, b], i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_auto] md:grid-cols-3 py-6 border-b border-[rgba(13,13,13,0.06)] text-sm md:text-base items-center">
              <div className="font-medium">{f}</div>
              <div className="text-center px-4 md:px-0">
                {a ? <span className="text-[var(--primary)] font-bold">+</span> : <span className="text-[var(--ink)]/30">—</span>}
              </div>
              <div className="text-center px-4 md:px-0">
                {b ? <span className="text-[var(--primary)] font-bold">+</span> : <span className="text-[var(--ink)]/30">—</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 04 — Escolha seu kit (Plans) ---------- */
export function Plans() {
  return (
    <section id="planos" className="py-24 md:py-32 border-t border-[rgba(13,13,13,0.1)]">
      <div className="container-edge">
        <NumberedHeader number="04" title="Escolha seu kit" />
        <div className={`grid gap-px bg-[rgba(13,13,13,0.08)] border border-[rgba(13,13,13,0.08)] rounded-xl overflow-hidden ${bundleData.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {bundleData.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col justify-between p-10 md:p-12 transition-all group relative ${
                p.featured
                  ? "bg-[var(--primary)] text-white overflow-hidden shadow-[0_20px_60px_-20px_rgba(3,105,161,0.45)]"
                  : "bg-white hover:bg-[var(--paper)]"
              }`}
            >
              {p.badge && (
                <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.1em] rounded-bl-xl ${
                  p.featured ? "bg-white text-[var(--primary)]" : "bg-[var(--primary)] text-white"
                }`}>
                  {p.badge}
                </div>
              )}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] mb-12">{p.name}</h3>
                <p className="font-display text-5xl md:text-6xl mb-4">{fmt(p.price)}</p>
                <p className="text-[10px] uppercase tracking-[0.18em] opacity-70 mb-3">
                  {bundleDurationLabel(p)}
                </p>
                <p className="text-xs opacity-70 mb-2">{p.priceNote}</p>
                <p className="text-xs opacity-70 mb-12">{bundleShippingLabel(p)}</p>
              </div>
              <a
                href={p.checkoutUrl}
                onClick={() =>
                  trackCheckoutClick({
                    source: "home_plans",
                    bundleId: p.id,
                    bundleName: p.name,
                    value: p.price,
                  })
                }
                className={`w-full block text-center py-4 text-xs font-bold uppercase tracking-[0.18em] rounded-xl transition-colors ${
                  p.featured
                    ? "bg-white text-[var(--primary)] hover:bg-[var(--paper)]"
                    : "border border-[rgba(13,13,13,0.2)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]"
                }`}
              >
                Comprar Agora
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- 05 — Editorial lifestyle / destaques ---------- */
export function EditorialQuote() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-[rgba(13,13,13,0.1)]">
      <div className="container-edge grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 w-full">
          <StoreImage
            srcMobile={lifestyleRunning.mobile}
            srcDesktop={lifestyleRunning.desktop}
            alt="Oxímetro GlicoMax na mesa de cabeceira"
            variant="section-full"
            loading="lazy"
          />
        </div>
        <div className="lg:col-span-5">
          <span className="eyebrow text-[var(--ink)]/40">No dia a dia</span>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight mt-6 text-balance">
            Coloque o dedo, aperte o botão e pronto: a saturação e os batimentos aparecem na tela.
          </blockquote>
          <div className="mt-10 flex items-center gap-4">
            <span className="rule" />
            <div>
              <div className="text-sm font-semibold">{brand.productName}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--ink)]/50">{brand.taglineShort}</div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4">
            <Highlight title="Para a família" sub="Um em cada casa" text="Com os kits de 2 e 3 unidades, cada pessoa tem o seu oxímetro por perto." />
            <Highlight title="Para levar" sub="Cabe no bolso" text="Leve na bolsa ou na mala: são só 5,7 × 3,1 × 3 cm." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({ title, sub, text }: { title: string; sub: string; text: string }) {
  return (
    <figure className="border-t border-[rgba(13,13,13,0.1)] pt-5">
      <p className="text-sm leading-snug font-medium">{text}</p>
      <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[var(--ink)]/60">
        {title} · {sub}
      </figcaption>
    </figure>
  );
}

/* ---------- 06 — FAQ ---------- */
const [kit1, kit2, kit3] = bundleData;

export const faqItems = [
  {
    q: "O que é um oxímetro de dedo?",
    a: "É um aparelho que, preso na ponta do dedo, mede a saturação de oxigênio no sangue (SpO2) e a frequência cardíaca usando a luz que atravessa o dedo. Não precisa de picada.",
  },
  {
    q: "O GlicoMax mede glicose?",
    a: "Não. Apesar do nome, o GlicoMax é um oxímetro: mede a saturação de oxigênio (SpO2) e os batimentos por minuto. Para medir glicose, use um glicosímetro ou sensor indicado pelo seu médico.",
  },
  {
    q: "Como usar?",
    a: "Abra o clipe, coloque o dedo indicador ou médio com a unha para cima, aperte o botão e aguarde alguns segundos parado. A saturação aparece em cima e os batimentos embaixo.",
  },
  {
    q: "Qual a diferença entre os kits?",
    a: `Oferecemos 3 kits: ${unitsLabel(kit1!.units)} por ${fmt(kit1!.price)}; ${unitsLabel(kit2!.units)} por ${fmt(kit2!.price)} — o mais vendido; e ${unitsLabel(kit3!.units)} por ${fmt(kit3!.price)}, ideal para a família.`,
  },
  {
    q: "O que pode atrapalhar a leitura?",
    a: "Mãos frias, movimento durante a medição, esmalte escuro ou unhas postiças e luz forte sobre o aparelho podem alterar o resultado. Circulação ruim e a pigmentação da pele também podem influenciar. Aqueça as mãos, fique parado e, se precisar, use outro dedo.",
  },
  {
    q: "O oxímetro substitui o médico?",
    a: "Não. Ele serve para acompanhar em casa. Se a saturação estiver baixa, ou se você sentir falta de ar ou mal-estar, procure atendimento médico.",
  },
  { q: "Precisa de aplicativo ou celular?", a: "Não. Os números aparecem na própria tela do oxímetro." },
  { q: "Qual o tamanho do aparelho?", a: "5,7 × 3,1 × 3 cm — cabe no bolso, na bolsa ou na gaveta." },
  { q: "Como funciona o envio?", a: `${FREE_SHIPPING_LABEL} com rastreamento para todo o Brasil. Detalhes em nossa política de envio.` },
  { q: "Em quanto tempo recebo?", a: "O prazo depende do frete escolhido no checkout e aparece antes do pagamento." },
  {
    q: "Posso desistir da compra?",
    a: "Sim. Você tem 7 dias após o recebimento para desistir, conforme o Código de Defesa do Consumidor. Veja os detalhes na política de reembolso.",
  },
];

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems;
  return (
    <section className="py-24 md:py-32 border-t border-[rgba(13,13,13,0.1)]">
      <div className="container-edge max-w-4xl">
        <NumberedHeader number="05" title="Perguntas frequentes" />
        <div className="border-t border-[rgba(13,13,13,0.1)]">
          {items.map((item, i) => (
            <details key={i} className="group border-b border-[rgba(13,13,13,0.08)] py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none gap-8">
                <span className="text-sm md:text-base font-medium uppercase tracking-tight">{item.q}</span>
                <span className="text-2xl font-light text-[var(--ink)]/50 group-hover:text-[var(--primary)] transition-colors leading-none">+</span>
              </summary>
              <p className="mt-4 text-sm text-[var(--ink)]/60 leading-relaxed max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
export function CtaFinal() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-8 text-center bg-[var(--primary)] text-white">
      <div className="container-edge">
        <h2 className="font-display text-5xl md:text-7xl lg:text-9xl mb-12 italic text-balance">
          Escolha seu kit.
        </h2>
        <p className="max-w-md mx-auto text-white/80 mb-12 text-sm md:text-base leading-relaxed">
          Comece com 1 unidade ou leve 2 e economize. Todos os kits têm envio rastreado, compra segura e{" "}
          {FREE_SHIPPING_LABEL.toLowerCase()}.
        </p>
        <Link
          to="/produto"
          className="inline-block bg-white text-[var(--primary)] px-10 md:px-12 py-5 md:py-6 text-xs md:text-sm font-bold uppercase tracking-[0.2em] rounded-xl hover:scale-[1.02] transition-transform"
        >
          Comprar Agora
        </Link>

      </div>
    </section>
  );
}
