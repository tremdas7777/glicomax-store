/**
 * Order bumps do checkout (ofertas logo acima do botão de finalizar).
 * Preços usados no servidor — o cliente só exibe. Lista vazia = checkout sem bump.
 *
 * Para ativar uma oferta, adicione um item. Exemplo:
 *   {
 *     id: "estojo",
 *     name: "Estojo protetor",
 *     fullName: "Estojo protetor para o oxímetro GlicoMax",
 *     gatewayName: "GlicoMax Estojo",
 *     price: 19.9,
 *     compareAt: 39.9,
 *     img: imgEstojo, // import imgEstojo from "@/assets/estojo.webp"
 *     question: "Vai levar o GlicoMax na bolsa?",
 *     body: "O estojo protege a tela e o clipe contra quedas e arranhões.",
 *     benefits: ["Fecho com zíper", "Cabe no bolso"],
 *     cta: "Sim! Quero o estojo por + {preco}",
 *   }
 */
export type OrderBumpItem = {
  id: string;
  name: string;
  fullName: string;
  /** Nome enviado ao gateway (fatura). */
  gatewayName: string;
  price: number;
  /** Preço "de" (riscado). Sem ele, a oferta mostra só o preço. */
  compareAt?: number;
  img: string;
  /** Texto de venda exibido no checkout. */
  question: string;
  body: string;
  benefits: string[];
  /** Texto do checkbox; `{preco}` vira o preço formatado. */
  cta: string;
};

export type BumpId = OrderBumpItem["id"];

export const ORDER_BUMPS: readonly OrderBumpItem[] = [];

/** Bumps escolhidos, na ordem do checkout (ids repetidos ou desconhecidos são ignorados). */
export const getBumps = (ids: readonly string[]) => ORDER_BUMPS.filter((b) => ids.includes(b.id));

/** Soma dos bumps escolhidos, em reais. */
export const bumpsTotal = (ids: readonly string[]) =>
  Math.round(getBumps(ids).reduce((s, b) => s + b.price * 100, 0)) / 100;
