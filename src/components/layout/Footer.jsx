import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="flex flex-col sm:flex-row justify-between items-center w-full h-auto 
    sm:h-40 px-6 sm:px-20 md:px-40 py-6 bg-[#003057] gap-2 sm:gap-0"
    >
      <div className="flex gap-4 justify-center items-center mb-4 sm:mb-0">
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
      <div className="flex gap-4 justify-center items-center">
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
  );
}
