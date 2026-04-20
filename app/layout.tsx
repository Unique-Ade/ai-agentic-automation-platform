import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "AI Agentic Platform",
  description: "Human-in-the-loop AI operations dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}