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

export default function Sobre() {
  const containerRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (isMobile()) {
      el.style.opacity = 1;
      el.style.transform = "none";
      return;
    }

    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    function onScroll() {
      if (!animated.current && isInViewport(el)) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
        animated.current = true;
        window.removeEventListener("scroll", onScroll);
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="empresa"
      style={{ fontFamily: "Century-Gothic, sans-serif" }}
      className="flex justify-center items-center p-4 sm:p-6 md:p-8"
    >
      <div
        ref={containerRef}
        className="border-4 border-[#FFA500] rounded-[20px] w-[90%] p-4 sm:p-8 md:p-16 lg:p-20 mt-6 md:mt-10 bg-white shadow-md"
      >
        <h1 className="text-[#003057] font-bold text-xl sm:text-2xl md:text-3xl mb-4">
          SOBRE A EMPRESA
        </h1>
        <div className="mt-4 sm:mt-8 gap-4 sm:gap-8 text-[#003057] text-base sm:text-lg">
          <p className="mb-4 sm:mb-8">
            Na <strong>EPR</strong>, atuamos para transformar a experiência nas
            rodovias,{" "}
            <strong>
              conectamos pessoas e impulsionamos o desenvolvimento das regiões
              por onde passamos.
            </strong>{" "}
            Mais do que manter estradas, nosso compromisso é com a mobilidade
            que gera impacto positivo, com segurança, eficiência e visão de
            futuro.
          </p>
          <p className="mb-4 sm:mb-8">
            Com 3.013 km sob gestão, somos hoje uma das maiores plataformas de
            concessões rodoviárias do Brasil. Estamos presentes em{" "}
            <strong>Minas Gerais</strong> e no <strong>Paraná</strong>, com
            investimentos contínuos em modernização, atendimento ao usuário e
            sustentabilidade.
          </p>
          <p className="mb-4 sm:mb-8">
            Nossa trajetória nasce da união entre a <strong>Equipav</strong>,
            com mais de seis décadas de experiência em infraestrutura, e a
            <strong> Perfin</strong>, gestora especializada em ativos de longo
            prazo. Essa combinação nos dá a solidez e o foco necessários para
            atuar com excelência e responsabilidade.
          </p>
          <p className="mb-4 sm:mb-8">
            Em Minas Gerais, operamos as concessões EPR{" "}
            <strong>Via Mineira, Triângulo, Sul de Minas</strong> e{" "}
            <strong>Vias do Café.</strong> No Paraná, estamos à frente das
            rodovias <strong>Litoral Pioneiro</strong> e{" "}
            <strong>Iguaçu.</strong>
          </p>
          <p>
            Nosso jeito de fazer é guiado por um empreendedorismo que
            transforma, pela força de times conectados e pela entrega de
            resultados que constroem o futuro.
          </p>
        </div>
      </div>
    </div>
  );
}
