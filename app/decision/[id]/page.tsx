"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function DecisionPage() {
  const params = useParams();
  const id = params.id;

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function approve() {
    setMessage("✅ Decision approved successfully.");
  }

  function reject() {
    setMessage("❌ Decision rejected.");
  }

  function retry() {
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage("🔄 Agent re-evaluated successfully.");
    }, 1500);
  }

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

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">🧠 Agent Reasoning</h2>
            <p>
              User intent appears to be refund related but confidence is low.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">📊 Confidence Score</h2>
            <p className="text-red-700 font-bold text-xl">48%</p>
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={approve}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Approve
            </button>

            <button
              onClick={reject}
              className="bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Reject
            </button>

            <button
              onClick={retry}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              {loading ? "Retrying..." : "Retry"}
            </button>
          </div>

          {message && (
            <div className="mt-4 border rounded-lg p-4 bg-gray-50">
              {message}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}