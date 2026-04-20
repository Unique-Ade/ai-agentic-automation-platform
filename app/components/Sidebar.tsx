"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-xl font-bold mb-8">
        AI Control Panel
      </h2>

      <nav className="space-y-4">
        <Link href="/" className="block hover:text-blue-400">
          Dashboard
        </Link>

        <Link href="/logs" className="block hover:text-blue-400">
          Logs
        </Link>

        <Link href="/analytics" className="block hover:text-blue-400">
          Analytics
        </Link>

        <Link href="/settings" className="block hover:text-blue-400">
          Settings
        </Link>
      </nav>
    </aside>
  );
}