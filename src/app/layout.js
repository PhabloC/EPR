import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "EPR Trainee 2025",
  description:
    "Programa de Trainee EPR 2025 – Mobilidade, inovação e oportunidades para recém-formados. Saiba mais e inscreva-se!",
  keywords: [
    "EPR",
    "Trainee",
    "2025",
    "Programa de Trainee",
    "Mobilidade",
    "Inovação",
    "Rodovias",
    "Infraestrutura",
    "Oportunidades",
    "Carreira",
  ],
  openGraph: {
    title: "EPR Trainee 2025",
    description:
      "Programa de Trainee EPR 2025 – Mobilidade, inovação e oportunidades para recém-formados.",
    url: "https://www.epr.com.br/trainee2025",
    siteName: "EPR Trainee 2025",
    images: [
      {
        url: "/banner2.png",
        width: 1200,
        height: 630,
        alt: "Banner EPR Trainee 2025",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EPR Trainee 2025",
    description:
      "Programa de Trainee EPR 2025 – Mobilidade, inovação e oportunidades para recém-formados.",
    images: ["/banner2.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
