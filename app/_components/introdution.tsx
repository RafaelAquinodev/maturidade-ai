import Image from "next/image";
import IAMaturityQuiz from "./maturityQuizIa";

export default function IntroAndUserForm() {
  return (
    <div className="w-full bg-gray-100 rounded-none shadow-none grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Coluna da esquerda: Introdução */}
      <div className="text-gray-800 space-y-4 p-8">
        <Image
          src="/images/maturidade-logo.jpg"
          alt="Descrição da imagem"
          width={600}
          height={400}
          className="rounded-md shadow-md mb-6"
        />

        <h2 className="text-2xl font-semibold">
          Qual a maturidade da sua empresa para adotar inteligência artificial?
        </h2>
        <p>
          Este questionário avalia de maneira geral a maturidade da sua
          organização em dados, tecnologia, processos, cultura e estratégia,
          permitindo identificar o estágio atual e apontar recomendações para
          jornada de transformação com IA da sua organização. Responda com
          seriedade as 15 perguntas e tenha um panorama ao final do
          questionário.
        </p>
        <p>
          Responda com seriedade as 15 perguntas e tenha um panorama ao final do
          questionário.
        </p>
      </div>

      {/* Coluna da direita: Formulário de dados pessoais */}
      <div className="space-y-6 p-8">
        <IAMaturityQuiz />
      </div>
    </div>
  );
}
