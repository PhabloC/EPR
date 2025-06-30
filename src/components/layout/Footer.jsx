import Image from "next/image";
import Script from "next/script";

export default function Footer() {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between items-center w-full h-[200px]
    sm:h-[200px]  px-6 sm:px-20 md:px-40 py-6 bg-[#003057] gap-2 sm:gap-0 "
      >
        <div className="flex gap-4 justify-center items-center ">
          <Image
            src="/logo2.png"
            alt="logo2"
            width={100}
            height={100}
            className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] object-contain mx-auto"
          />
          <Image
            src="/cia.png"
            alt="cia"
            width={100}
            height={100}
            className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] object-contain mx-auto"
          />
        </div>
        <div className="flex gap-4 justify-center items-center sm:pb-0 pb-8">
          <a
            href="https://www.linkedin.com/company/grupoepr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedin.png"
              alt="linkedin"
              width={32}
              height={32}
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:opacity-80"
            />
          </a>
          <a
            href="https://www.youtube.com/@GrupoEPR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/youtube.png"
              alt="youtube"
              width={32}
              height={32}
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:opacity-80"
            />
          </a>
          <a
            href="https://www.facebook.com/grupoeprbr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.png"
              alt="facebook"
              width={32}
              height={32}
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:opacity-80"
            />
          </a>
          <a
            href="https://www.instagram.com/grupo.epr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="instagram"
              width={32}
              height={32}
              className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:opacity-80"
            />
          </a>
        </div>
      </div>
      {/* Handtalk Plugin */}
      <Script
        src="https://plugin.handtalk.me/web/latest/handtalk.min.js"
        strategy="afterInteractive"
      />
      <Script id="handtalk-init" strategy="afterInteractive">{`
      var ht = new HT({ token: "6e3b988a1f4e4dac100d9dc587436df2", addonsEnabled: false });
    `}</Script>
    </>
  );
}
