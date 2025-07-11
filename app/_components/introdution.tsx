import IAMaturityQuiz from "./maturityQuizIa";

export default function IntroAndUserForm() {
  return (
    <div className="w-full bg-gray-100 rounded-none shadow-none grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Coluna da esquerda: Introdução */}
      <div className="text-gray-800 space-y-4 p-8">
        <h2 className="text-2xl font-semibold">
          Qual a maturidade para adotar inteligência artificial da sua empresa?
        </h2>
        <p>
          Este questionário avalia de maneira geral a maturidade da sua
          organização em dados, tecnologia, processos, cultura e estratégia,
          permitindo identificar o estágio atual e apontar recomendações para
          sua jornada de transformação com IA.
        </p>
        <p>
          Responda com seriedade as 15 perguntas e tenha um panorama breve ao
          final do questionário.
        </p>
      </div>

      {/* Coluna da direita: Formulário de dados pessoais */}
      <div className="space-y-6  ">
        <IAMaturityQuiz />
      </div>
    </div>
  );
}
