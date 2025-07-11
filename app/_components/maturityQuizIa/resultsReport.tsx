interface Props {
  score: number;
  result: {
    level: string;
    diagnosis: string;
    advice: string;
  };
}
function getColorByScore(score: number) {
  if (score <= 30) return "text-red-600";
  if (score <= 50) return "text-yellow-600";
  return "text-green-600";
}

export default function ResultsReport({ score, result }: Props) {
  const levelColorClass = getColorByScore(score);
  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <p className={`text-lg font-bold ${levelColorClass}`}>{result.level}</p>
      <p className={`mt-2 font-bold ${levelColorClass}`}>
        Pontuação obtida: {score} pontos
      </p>
      <p className="mt-4 text-black">
        <strong>Diagnóstico:</strong> {result.diagnosis}
      </p>
      <p className="mt-2 text-black">
        <strong>Conselho:</strong> {result.advice}
      </p>
    </div>
  );
}
