"use client";

import { useEffect, useState } from "react";

export default function LogsPage() {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/decision/action")
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Execution Logs
        </h1>

        <div className="border rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Timestamp</th>
                <th className="p-4">Action</th>
                <th className="p-4">Status</th>
                <th className="p-4">Override</th>
              </tr>
            </thead>

            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{log.id}</td>
                  <td className="p-4">{log.time}</td>
                  <td className="p-4">{log.action}</td>
                  <td className="p-4">{log.status}</td>
                  <td className="p-4">{log.override}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}