interface Props {
  questions: string[];
  answers: number[];
  onChange: (index: number, value: string) => void;
  onSubmit: () => void;
}

export default function QuestionList({
  questions,
  answers,
  onChange,
  onSubmit,
}: Props) {
  // Mapeamento das opções personalizadas por índice da pergunta
  const customOptionsMap: {
    [key: number]: { value: number; label: string }[];
  } = {
    8: [
      // pergunta 9
      { value: 1, label: "1 - Nunca realizou um piloto de IA." },
      {
        value: 2,
        label:
          "2 - Já considerou realizar, mas ainda não iniciou nenhum piloto de IA.",
      },
      {
        value: 3,
        label:
          "3 - Realizou um piloto de pequeno porte, sem impacto relevante ou continuidade.",
      },
      {
        value: 4,
        label:
          "4 - Realizou pilotos relevantes e começou a aplicar resultados em processos reais.",
      },
      {
        value: 5,
        label:
          "5 - Realiza pilotos recorrentes e possui metodologia estruturada para POCs de IA, alinhada à estratégia da empresa.",
      },
    ],
    10: [
      // pergunta 11
      {
        value: 1,
        label: "1 - Nenhum colaborador possui conhecimentos em IA e dados.",
      },
      {
        value: 2,
        label:
          "2 - Poucos colaboradores têm noções superficiais e não aplicam no trabalho.",
      },
      {
        value: 3,
        label:
          "3 - Alguns colaboradores têm conhecimentos básicos e já começam a explorar IA.",
      },
      {
        value: 4,
        label:
          "4 - Possuímos profissionais com conhecimentos intermediários e envolvimento em projetos de IA.",
      },
      {
        value: 5,
        label:
          "5 - Possuímos profissionais qualificados, com conhecimentos avançados e papel ativo no desenvolvimento de soluções de IA.",
      },
    ],
    11: [
      // pergunta 12
      {
        value: 1,
        label:
          "1 - A liderança não demonstra interesse nem apoio a iniciativas de dados e IA.",
      },
      {
        value: 2,
        label:
          "2 - A liderança demonstra interesse pontual, mas sem envolvimento ou priorização real.",
      },
      {
        value: 3,
        label:
          "3 - Há apoio moderado da liderança, restrito a áreas específicas ou projetos isolados.",
      },
      {
        value: 4,
        label:
          "4 - A liderança apoia e participa de iniciativas relevantes com dados e IA.",
      },
      {
        value: 5,
        label:
          "5 - A liderança apoia de forma consistente e estratégica, promovendo dados e IA como prioridade para a organização.",
      },
    ],
    13: [
      // pergunta 14
      {
        value: 1,
        label:
          "1 - IA não é mencionada nem considerada no planejamento estratégico.",
      },
      {
        value: 2,
        label:
          "2 - IA é mencionada de forma genérica, sem ações concretas previstas.",
      },
      {
        value: 3,
        label:
          "3 - Existem intenções ou iniciativas isoladas de incluir IA no planejamento.",
      },
      {
        value: 4,
        label:
          "4 - IA está parcialmente integrada ao planejamento estratégico, com projetos definidos.",
      },
      {
        value: 5,
        label:
          "5 - IA é parte central e estruturada do planejamento estratégico da empresa, com metas claras e roadmap definido.",
      },
    ],
    14: [
      // pergunta 15
      {
        value: 1,
        label:
          "1 - Não existe qualquer plano ou intenção de adoção de IA no horizonte.",
      },
      {
        value: 2,
        label:
          "2 - Existe apenas uma ideia inicial, sem estruturação formal ou prazos.",
      },
      {
        value: 3,
        label:
          "3 - Existe um planejamento básico, ainda pouco detalhado ou informal.",
      },
      {
        value: 4,
        label:
          "4 - Existe um plano estruturado para algumas áreas ou projetos específicos.",
      },
      {
        value: 5,
        label:
          "5 - Existe um roadmap formal, abrangente, com objetivos, prazos e priorização clara para adoção de IA em toda a empresa.",
      },
    ],
  };

  // Opções padrão
  const defaultOptions = [
    { value: 1, label: "1 - Não temos nada implementado" },
    { value: 2, label: "2 - Estamos começando" },
    { value: 3, label: "3 - Estágio intermediário" },
    { value: 4, label: "4 - Boas práticas implementadas" },
    { value: 5, label: "5 - Nível avançado" },
  ];

  return (
    <div className="space-y-6">
      {questions.map((q, idx) => {
        const options = customOptionsMap[idx] ?? defaultOptions;

        return (
          <div key={idx}>
            <label className="block text-gray-700 font-medium mb-2">
              {idx + 1}. {q}
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black"
              value={answers[idx]}
              onChange={(e) => onChange(idx, e.target.value)}
            >
              {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        );
      })}

      <button
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto"
        onClick={onSubmit}
      >
        Enviar respostas
      </button>
    </div>
  );
}
