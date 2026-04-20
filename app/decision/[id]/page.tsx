"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function DecisionPage() {
  const params = useParams();
  const id = params.id;

  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-700 hover:underline">
          ← Back
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-8">
          Decision Review: {id}
        </h1>

        <div className="space-y-6">

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-2">🧠 Agent Reasoning</h2>
            <p>
              User intent appears to be a refund request, but confidence is low due
              to ambiguous language.
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-2">📚 Retrieved Context</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refund policy allows returns within 14 days.</li>
              <li>User purchased item 10 days ago.</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-2">⚙️ Proposed Action</h2>
            <p>Send refund approval email and notify finance workflow.</p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-2">📊 Confidence Score</h2>
            <p className="text-red-700 font-bold text-xl">48%</p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
              Approve
            </button>

            <button className="bg-red-600 text-white px-5 py-2 rounded-lg">
              Reject
            </button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
              Retry
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}