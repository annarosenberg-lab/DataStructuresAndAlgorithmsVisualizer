import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algorithm Learning Dashboard",
  description: "Learn core interview algorithms with concise visuals and explanations."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <main className="app-shell">{children}</main>
      </body>
    </html>
  );
}
