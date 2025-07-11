interface Props {
  results: {
    [key: string]: {
      avg: string;
      interpretation: string;
    };
  };
}

export default function DimensionBreakdown({ results }: Props) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mt-6">
        🔎 Análise por dimensão temática
      </h3>
      <ul className="mt-4 space-y-2">
        {Object.entries(results).map(([dim, { avg, interpretation }]) => (
          <li key={dim} className="bg-white border p-3 rounded shadow-sm">
            <p className="font-medium text-black">
              <strong>{dim}:</strong> média {avg}
            </p>
            <p className="text-black text-sm">{interpretation}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
