import UserForm from "./formularios";
import ResultsContent from "./resultsContent";

export default function ResultadoFinal() {
  return (
    <div className="w-full bg-gray-100 rounded-none shadow-none grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6 p-8">
        <ResultsContent />
      </div>
      <div className="text-gray-800 space-y-4 p-8">
        <h2 className="text-2xl font-semibold mb-4">Leia aqui para terminar</h2>
        <div className="bg-gray-50 p-4 rounded-lg border">
          Esta é uma análise que fornece uma visão inicial sobre a maturidade da
          sua empresa em Inteligência Artificial. Se quiser conversar mais a
          fundo, pode contar com a gente. Marque uma reunião com o nosso time
          para conversarmos. Esta ferramenta foi elaborada por Eliéser Ribeiro –
          Cientista de Dados e Head de IA na Provider IT (Empresa com 30 anos de
          mercado). elieser.ribeiro@provider-it.com.br (33) 98451-4156
          (WhatsApp)
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">
            Preencha seus dados abaixo que faremos contato.
          </h2>
        </div>
        <UserForm />
      </div>
    </div>
  );
}
