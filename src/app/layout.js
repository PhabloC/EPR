import Header from "@/components/layout/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ fontFamily: "Century-Gothic, sans-serif" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
