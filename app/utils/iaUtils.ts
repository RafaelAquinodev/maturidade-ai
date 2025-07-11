export function interpretScore(score: number) {
  if (score <= 30)
    return {
      level: "🔴 Maturidade Inicial / Exploratório",
      diagnosis:
        "Sua empresa está em fase inicial no uso de IA. Ainda faltam dados estruturados, tecnologia apropriada, processos mapeados, cultura orientada a dados e alinhamento estratégico.",
      advice:
        "Recomendamos priorizar a organização e governança dos dados e identificar áreas-piloto para experimentação com iniciativas rápidas e de baixo custo (Quick Wins). Sensibilize a liderança para o potencial transformador da IA.",
    };
  if (score <= 50)
    return {
      level: "🟡 Maturidade Intermediária / Em estruturação",
      diagnosis:
        "Sua empresa já avançou em alguns pontos (como dados coletados ou tecnologias pontuais), mas ainda carece de integração, processos maduros e maior alinhamento estratégico para escalar projetos.",
      advice:
        "Invista na integração de dados entre áreas, na capacitação das equipes e na definição de indicadores de sucesso para projetos de IA. Avalie processos com maior potencial de retorno e avance de forma estruturada.",
    };
  return {
    level: "🟢 Maturidade Avançada / Escalável",
    diagnosis:
      "Sua empresa já está madura e apta a acelerar iniciativas com IA, contando com dados, tecnologia, processos e cultura organizacional alinhados.",
    advice:
      "Estruture um roadmap estratégico de IA e expanda aplicações para novas áreas de negócio e tecnologias avançadas (como IA generativa e agentes autônomos), buscando diferenciação competitiva no mercado.",
  };
}

export function analyzeDimensions(
  answers: number[],
  dimensions: Record<string, number[]>
) {
  const result: Record<string, { avg: string; interpretation: string }> = {};
  for (const [dimension, indexes] of Object.entries(dimensions)) {
    const avg =
      indexes.reduce((sum, idx) => sum + answers[idx], 0) / indexes.length;
    result[dimension] = {
      avg: avg.toFixed(2),
      interpretation:
        avg < 3
          ? `⚠️ ${dimension} com fragilidades identificadas.`
          : `✅ ${dimension} em estágio razoável ou avançado.`,
    };
  }
  return result;
}
