"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Decision = {
  id: string;
  type: string;
  confidence: number;
  status: string;
};

function confidenceColor(score: number) {
  if (score >= 80) return "text-green-700";
  if (score >= 60) return "text-yellow-700";
  return "text-red-700";
}

export default function HomePage() {
  const [data, setData] = useState<Decision[]>([]);

  useEffect(() => {
    fetch("/api/decisions")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          AI Decision Queue
        </h1>

        <p className="text-gray-700 mb-8">
          Human-in-the-Loop approvals for AI workflow decisions
        </p>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Type</th>
                <th className="p-4">Confidence</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t border-gray-300">
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.type}</td>

                  <td
                    className={`p-4 font-bold ${confidenceColor(
                      item.confidence
                    )}`}
                  >
                    {item.confidence}%
                  </td>

                  <td className="p-4">{item.status}</td>

                  <td className="p-4">
                    <Link
                      href={`/decision/${item.id}`}
                      className="text-blue-700 hover:underline"
                    >
                      Review →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </main>
  );
}