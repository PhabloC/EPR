import Header from "@/components/layout/Header";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

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
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZRMDXZ2VCY"
          strategy="afterInteractive"
        />
        <Script id="gtag-main" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZRMDXZ2VCY');
        `}</Script>
        {/* Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-719214096"
          strategy="afterInteractive"
        />
        <Script id="gtag-ads" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-719214096');
        `}</Script>
        {/* Assistive Plugin */}
        <Script id="assistive-plugin" strategy="afterInteractive">{`
          (function(){ var s = document.createElement('script'); var h = document.querySelector('head') || document.body; s.charset="UTF-8"; s.src = 'https://cdn.assistive.com.br/plugin/AssistiveWebPlugin.js'; s.async = true; s.onload = function(){ assistive.init({});}; h.appendChild(s); })();
        `}</Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '153281596081732');
          fbq('track', 'PageView');
        `}</Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB8X7TD" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* Meta Pixel noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=153281596081732&ev=PageView&noscript=1" />`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
