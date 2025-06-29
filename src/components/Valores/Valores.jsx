"use client";

import { useEffect, useRef } from "react";

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight - 80 && rect.bottom > 0;
}

function isMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 640;
}

export default function Valores() {
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const animated1 = useRef(false);
  const animated2 = useRef(false);

  useEffect(() => {
    const el1 = box1Ref.current;
    const el2 = box2Ref.current;
    if (!el1 || !el2) return;

    // Remove o bloqueio da animação no mobile
    el1.style.opacity = 0;
    el1.style.transform = "translateY(40px)";
    el1.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    el2.style.opacity = 0;
    el2.style.transform = "translateY(40px)";
    el2.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    function onScroll() {
      if (!animated1.current && isInViewport(el1)) {
        el1.style.opacity = 1;
        el1.style.transform = "translateY(0)";
        animated1.current = true;
      }
      if (!animated2.current && isInViewport(el2)) {
        el2.style.opacity = 1;
        el2.style.transform = "translateY(0)";
        animated2.current = true;
      }
      if (animated1.current && animated2.current) {
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] justify-center items-center gap-6 md:gap-8 p-8 sm:p-8 md:p-12 md:pl-40 md:pr-40">
      <div
        ref={box1Ref}
        className="bg-[#003057] text-white w-full h-[320px] sm:h-[380px] md:h-[400px] p-6 sm:p-10 md:p-12 rounded-[18px] flex flex-col items-center  font-bold mb-4 md:mb-0 mx-auto"
      >
        <div className="w-full max-w-xs sm:max-w-md">
          <h2 className="text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 md:mb-5">
            NOSSOS VALORES
          </h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Ética</li>
            <li className="mb-2">Respeito e Transparência</li>
            <li className="mb-2">Sustentabilidade</li>
            <li className="mb-2">Qualidade e Excelência</li>
            <li className="mb-2">Colaboração</li>
            <li className="mb-2">Evolução COntínua</li>
            <li>Foco no Usuário</li>
          </ul>
        </div>
      </div>
      <div
        ref={box2Ref}
        className="bg-[#81EAAE] text-[#003057] w-full h-[320px] sm:h-[380px] md:h-[400px] p-6 sm:p-10 md:p-12 rounded-[18px] flex flex-col items-center font-bold mx-auto"
      >
        <div className="w-full max-w-xs sm:max-w-md">
          <h2 className="text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 md:mb-5 ">
            NOSSO DNA - JEITO EPR DE FAZER:
          </h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">Mobilidade Sustentável e Conectada</li>
            <li className="mb-2">Inovação com Propósito</li>
            <li className="mb-2"> Responsabilidade Social e Ambiental</li>
            <li className="mb-2">Compromisso com a Excelência</li>
            <li>Comprometimento com a Segurança</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
