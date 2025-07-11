import UserForm from "./formularios";
import ResultsContent from "./resultsContent";

export default function ResultadoFinal() {
  return (
    <div className="w-full bg-gray-100 rounded-none shadow-none grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="text-gray-800 space-y-4 p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Preencha seus dados para ver o resultado
        </h2>
        <UserForm />
      </div>

      <div className="space-y-6 p-8">
        <ResultsContent />
      </div>
    </div>
  );
}
