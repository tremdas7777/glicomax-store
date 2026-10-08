import { Activity, AudioWaveform, Hand, HeartPulse, Home, Pointer, Ruler, Sun } from "lucide-react";

const benefits = [
  {
    Icon: Activity,
    title: "SpO2 em segundos",
    text: "Mostra a saturação de oxigênio no sangue poucos segundos depois de você colocar o dedo.",
  },
  {
    Icon: HeartPulse,
    title: "Frequência cardíaca",
    text: "Exibe os batimentos por minuto na mesma tela, junto com a saturação.",
  },
  {
    Icon: Sun,
    title: "Tela colorida",
    text: "Números grandes e coloridos, fáceis de ler de dia ou à noite.",
  },
  {
    Icon: Pointer,
    title: "Um botão só",
    text: "Coloque o dedo e aperte. Sem aplicativo, sem cadastro, sem configuração.",
  },
  {
    Icon: AudioWaveform,
    title: "Indicador de pulso",
    text: "A barra ao lado dos números mostra a intensidade do pulso durante a leitura.",
  },
  {
    Icon: Ruler,
    title: "Compacto",
    text: "5,7 × 3,1 × 3 cm: cabe no bolso, na bolsa ou na gaveta da cabeceira.",
  },
  {
    Icon: Hand,
    title: "Clipe com mola",
    text: "Abre e fecha sozinho e se acomoda ao dedo para a medição.",
  },
  {
    Icon: Home,
    title: "Uso em casa",
    text: "Acompanhe seus números no dia a dia e leve as anotações para conversar com seu médico.",
  },
] as const;

export function PremiumBenefits({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 md:py-28 bg-white border-t border-[rgba(13,13,13,0.06)]">
      <div className="container-edge">
        <div className="max-w-2xl mb-14 md:mb-16">
          <span className="eyebrow text-[var(--primary)]">Recursos</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[0.95] text-balance">
            Simples de usar, <span className="italic">fácil de ler.</span>
          </h2>
          <p className="mt-5 text-[var(--ink)]/65 leading-relaxed">
            Um oxímetro de dedo para acompanhar a saturação de oxigênio e os batimentos em casa, com leitura rápida e tela clara.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {benefits.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[rgba(13,13,13,0.08)] bg-[var(--paper)] p-6 md:p-7 hover:border-[var(--primary)]/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[var(--primary)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.12em] mb-2">{title}</h3>
              <p className="text-sm text-[var(--ink)]/60 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
