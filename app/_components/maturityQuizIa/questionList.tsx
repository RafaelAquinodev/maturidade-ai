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
  return (
    <div className="space-y-6">
      {questions.map((q, idx) => (
        <div key={idx}>
          <label className="block text-gray-700 font-medium mb-2">
            {idx + 1}. {q}
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black"
            value={answers[idx]}
            onChange={(e) => onChange(idx, e.target.value)}
          >
            {[1, 2, 3, 4, 5].map((opt) => (
              <option key={opt} value={opt}>
                {opt} -{" "}
                {opt === 1
                  ? "Não temos nada implementado"
                  : opt === 2
                  ? "Estamos começando"
                  : opt === 3
                  ? "Estágio intermediário"
                  : opt === 4
                  ? "Boas práticas implementadas"
                  : "Nível avançado"}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto"
        onClick={onSubmit}
      >
        Enviar respostas
      </button>
    </div>
  );
}
