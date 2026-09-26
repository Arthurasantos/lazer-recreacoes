/** Anos completos entre a fundação (AAAA-MM-DD) e a data de referência. */
export function anosDesde(fundacaoIso: string, hoje: Date = new Date()): number {
  const [a, m, d] = fundacaoIso.split("-").map(Number);
  let anos = hoje.getFullYear() - a;
  const antesDoAniversario =
    hoje.getMonth() + 1 < m || (hoje.getMonth() + 1 === m && hoje.getDate() < d);
  if (antesDoAniversario) anos -= 1;
  return anos;
}
