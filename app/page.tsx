"use client";

import Link from "next/link";

const decisions = [
  {
    id: "A101",
    type: "Customer Support",
    confidence: 92,
    status: "Auto Approved",
  },
  {
    id: "A102",
    type: "Hiring Review",
    confidence: 58,
    status: "Pending Review",
  },
  {
    id: "A103",
    type: "Sales Lead",
    confidence: 44,
    status: "Needs Approval",
  },
];

function confidenceColor(score: number) {
  if (score >= 80) return "text-green-600";
  if (score >= 60) return "text-yellow-600";
  return "text-red-600";
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          AI Decision Queue
        </h1>

        <p className="text-gray-500 mb-8">
          Human-in-the-Loop approvals for AI workflow decisions
        </p>

        <div className="bg-white rounded-2xl shadow border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Type</th>
                <th className="p-4">Confidence</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {decisions.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-4 font-medium">{item.id}</td>

                  <td className="p-4">{item.type}</td>

                  <td
                    className={`p-4 font-semibold ${confidenceColor(
                      item.confidence
                    )}`}
                  >
                    {item.confidence}%
                  </td>

                  <td className="p-4">{item.status}</td>

                  <td className="p-4">
                    <Link
                      href={`/decision/${item.id}`}
                      className="text-blue-600 hover:underline"
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