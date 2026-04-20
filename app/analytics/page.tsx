"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const decisionData = [
  { day: "Mon", total: 12 },
  { day: "Tue", total: 18 },
  { day: "Wed", total: 10 },
  { day: "Thu", total: 22 },
  { day: "Fri", total: 16 },
];

const approvalData = [
  { name: "Approved", value: 34 },
  { name: "Rejected", value: 8 },
  { name: "Retry", value: 12 },
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white p-10 text-black">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">Total Decisions</p>
            <h2 className="text-3xl font-bold">124</h2>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">Auto Approved</p>
            <h2 className="text-3xl font-bold">72%</h2>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">Human Overrides</p>
            <h2 className="text-3xl font-bold">18%</h2>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-gray-500">Avg Confidence</p>
            <h2 className="text-3xl font-bold">81%</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold mb-4">
              Decisions Over Time
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={decisionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold mb-4">
              Approval Outcomes
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={approvalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </main>
  );
}