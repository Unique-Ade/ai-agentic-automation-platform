"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function DecisionPage() {
  const params = useParams();
  const id = params.id;

  const [item, setItem] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/decisions")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((d: any) => d.id === id);
        setItem(found);
      });
  }, [id]);

  async function runAction(action: string) {
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/decision/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, action }),
    });

    const data = await res.json();

    setMessage(data.message);
    setLoading(false);

    const refreshed = await fetch("/api/decisions").then((r) => r.json());
    const found = refreshed.find((d: any) => d.id === id);
    setItem(found);
  }

  if (!item) {
    return <main className="p-10">Loading...</main>;
  }

  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-700 hover:underline">
          ← Back
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-8">
          Decision Review: {item.id}
        </h1>

        <div className="space-y-6">

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">Type</h2>
            <p>{item.type}</p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">Confidence</h2>
            <p>{item.confidence}%</p>
          </div>

          <div className="border rounded-xl p-6">
            <h2 className="font-bold text-lg mb-2">Current Status</h2>
            <p>{item.status}</p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => runAction("approved")}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              {loading ? "Processing..." : "Approve"}
            </button>

            <button
              onClick={() => runAction("rejected")}
              className="bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Reject
            </button>

            <button
              onClick={() => runAction("retried")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Retry
            </button>
          </div>

          {message && (
            <div className="border rounded-lg p-4 bg-gray-50">
              {message}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}