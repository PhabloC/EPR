"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight - 80 && rect.bottom > 0;
}

export default function Programa() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const animated1 = useRef(false);
  const animated2 = useRef(false);
  const animated3 = useRef(false);
  const animated4 = useRef(false);

  useEffect(() => {
    const el1 = ref1.current;
    const el2 = ref2.current;
    const el3 = ref3.current;
    const el4 = ref4.current;
    if (!el1 || !el2 || !el3 || !el4) return;

    [el1, el2, el3, el4].forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(60px) scale(0.95)";
      el.style.transition = `opacity 1.2s cubic-bezier(0.33, 1, 0.68, 1) ${
        index * 0.2
      }s, 
                           transform 1.2s cubic-bezier(0.33, 1, 0.68, 1) ${
                             index * 0.2
                           }s`;
    });

    function animate(el, animatedRef) {
      if (!animatedRef.current && isInViewport(el)) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0) scale(1)";
        animatedRef.current = true;
      }
    }

    function onScroll() {
      animate(el1, animated1);
      animate(el2, animated2);
      animate(el3, animated3);
      animate(el4, animated4);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        id="programa"
        className="bg-[#003057] w-full flex flex-col justify-center items-center "
      >
        <div>
          <Image
            src="/selos.png"
            alt="selo"
            width={400}
            height={400}
            className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-contain mx-auto mt-[5px] md:mt-[-50px] sm:mt-[20px]"
          />
        </div>
        <div
          ref={ref1}
          className="text-white w-full max-w-[800px] px-8 sm:px-0 "
        >
          <h1 className="text-[20px] sm:text-[24px] font-bold">
            SOBRE O PROGRAMA
          </h1>
          <div className="text-[14px] sm:text-[16px] mt-5">
            <p className="mb-5">
              O <strong>Programa de Trainee EPR 2025</strong> representa um
              marco importante para a companhia. Nesta primeira edição, o
              objetivo é formar profissionais com visão sistêmica, preparados
              para atuar de forma estratégica nas áreas operacionais e
              administrativas da empresa.
            </p>
            <p className="mb-5">
              Com duração de <strong>12 meses</strong>, o programa oferece{" "}
              <strong>
                vivência em diferentes áreas, participação em projetos
                estruturantes e oportunidades de aprendizado alinhadas às
                diretrizes e desafios da mobilidade sustentável.
              </strong>
            </p>
            <p className="mb-5">
              Buscamos profissionais que compartilhem dos nossos valores e que
              tenham interesse em atuar com responsabilidade, visão de futuro e
              compromisso com resultados concretos. Valorizamos perfis com
              atitude colaborativa, capacidade analítica e engajamento com o
              propósito da companhia.
            </p>
            <p>
              Na EPR, o desenvolvimento está diretamente conectado à entrega de
              valor nas regiões onde atuamos. O programa é uma oportunidade para
              integrar talentos à nossa jornada de evolução contínua.
            </p>
          </div>
        </div>
        <div
          ref={ref2}
          className="text-white w-full max-w-[800px] px-8 sm:px-0 mt-10 sm:mt-20"
        >
          <h1 className="text-[20px] sm:text-[24px] font-bold">
            REMUNERAÇÃO E BENEFÍCIO:
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 mt-10 sm:mt-20 justify-between border-b-3 border-white pb-10">
            <div className="flex items-center gap-4 sm:gap-8">
              <Image
                src="/carta.png"
                alt="carta"
                width={80}
                height={80}
                className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"
              />
              <div>
                <h3 className="text-[14px] sm:text-[16px] font-bold">
                  SALÁRIO TRAINEE:
                </h3>
                <p>
                  Fixo <strong>R$7.000,00</strong>{" "}
                </p>
                <p>
                  + <strong>R$ 2.000</strong> ajuda de custo
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-8">
              <Image
                src="/pizza.png"
                alt="pizza"
                width={80}
                height={80}
                className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"
              />
              <div className="w-full sm:w-[150px]">
                <h3 className="text-[14px] sm:text-[16px] font-bold">
                  PARTICPAÇÃO NOS LUCROS E RESULTADOS
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-8 sm:gap-20 mt-10">
            <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-8 justify-around w-full">
              <div className="flex flex-col items-center gap-4 w-full sm:w-[200px]">
                <Image
                  src="/medico.png"
                  alt="medico"
                  width={60}
                  height={60}
                  className="w-[65px] h-[65px] md:w-[80px] md:h=[60px] sm:w-[80px] sm:h-[80px]"
                />
                <p className="text-[14px] sm:text-[16px] font-bold">
                  Assistência Médica
                </p>
              </div>
              <div className="flex flex-col items-center  gap-4 w-full sm:w-[200px]">
                <Image
                  src="/fork.png"
                  alt="fork"
                  width={60}
                  height={60}
                  className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px]"
                />
                <p className="text-[14px] sm:text-[16px] font-bold">
                  Vale Refeição
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 w-full sm:w-[200px]">
                <Image
                  src="/tooth.png"
                  alt="tooth"
                  width={60}
                  height={60}
                  className="w-[65px] h-[65px] sm:w-[80px] sm:h-[80px]"
                />
                <p className="text-[14px] sm:text-[16px] font-bold">
                  Assistência Odontológica
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-8 justify-center w-full">
              <div className="flex flex-col items-center  gap-4 w-full sm:w-[200px]">
                <Image
                  src="/wheel.png"
                  alt="wheel"
                  width={50}
                  height={50}
                  className="w-[65px] h-[65px] md:w-[65px] md:h-[65px] sm:w-[65px] sm:h-[65px]"
                />
                <p className="text-[14px] sm:text-[16px] font-bold text-center">
                  Vale Transporte/Fretado ou Estacionamento
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 w-full sm:w-[200px]">
                <Image
                  src="/life.png"
                  alt="life"
                  width={60}
                  height={60}
                  className="w-[80px] h-[60px] md:w-[80px] md:h-[60px] sm:w-[80px] sm:h-[80px]"
                />
                <p className="text-[14px] sm:text-[16px] font-bold">
                  Seguro de Vida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="oportunidades"
        className="flex flex-col items-center pt-10 sm:pt-20 bg-[#003057]"
      >
        <div
          ref={ref3}
          className="bg-white border-5 border-[#FFA500] rounded-[28px] w-full max-w-[90%] px-4 sm:px-20 py-10 sm:py-20 mt-10"
        >
          <h1 className="text-[#003057] font-bold text-[20px] sm:text-[24px]">
            OPORTUNIDADES
          </h1>
          <div className="mt-8 sm:mt-15 gap-8 text-[#003057]">
            <p className="mb-8 w-full max-w-[1000px]">
              No Programa de Trainee EPR 2025, você poderá atuar em áreas
              estratégicas da companhia, desenvolvendo competências essenciais
              para sua carreira. <strong>Confira as principais frentes:</strong>
            </p>
            <div className="mt-8 sm:mt-15">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#FBB717]">
                Gestão de Negócios e Projetos
              </h2>
              <p className="mb-8">
                Atuação em iniciativas estratégicas, com foco em planejamento,
                execução e resultados.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#FBB717]">
                Finanças e Controladoria
              </h2>
              <p className="mb-8">
                Análises financeiras, controle orçamentário e apoio à tomada de
                decisões.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#FBB717]">
                Jurídico e Governança
              </h2>
              <p className="mb-8">
                Atuação com temas contratuais, regulatórios e de compliance.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#FBB717]">
                Tecnologia e Inovação
              </h2>
              <p className="mb-8">
                Projetos de transformação digital, automação e soluções
                tecnológicas.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[18px] sm:text-[20px] font-bold text-[#FBB717]">
                Engenharia e Operações
              </h2>
              <p className="mb-8">
                Vivência prática em obras, planejamento técnico e
                infraestrutura.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="requisitos"
        className="bg-[#003057] px-4 sm:px-20 py-10 sm:py-20 flex flex-col sm:flex-row justify-between"
      >
        <div ref={ref4} className="w-full max-w-[800px] p-4">
          <h1 className="text-[#FBB717] font-bold text-[28px] sm:text-[35px] sans-serif">
            PRÉ-REQUISITOS
          </h1>
          <div className="text-white mt-6 sm:mt-10">
            <p>
              Graduação concluída entre <strong>junho de 2023</strong> e{" "}
              <strong>junho de 2025</strong>, nos seguintes cursos:
            </p>
            <ul className="list-disc list-inside mt-6 sm:mt-8">
              <li>Graduação concluída entre junho de 2023 e junho de 2025;</li>
              <li>Modelo de trabalho presencial;</li>
              <li>
                Possuir Carteira Nacional de Habilitação (CNH), categoria B;
              </li>
              <li>
                <strong>Cursos considerados:</strong> Administração,
                Administração com ênfase em Análise de Sistemas, Administração
                com ênfase em Ciências Contábeis, Administração com ênfase em
                Estratégia, Administração com ênfase em Finanças, Administração
                com ênfase em Gestão de Projetos, Administração com ênfase em
                Negócios, Administração com ênfase em Sistemas da Informação,
                Administração Pública, Ciências Econômicas, Direito, Economia
                Empresarial e Controladoria, Engenharias (Civil, Eletromecânica,
                Elétrica, Eletrônica Mecânica, de Mobilidade, de Produção, de
                Produção Elétrica, de Produção Mecânica, de Gestão, Industrial,
                de Transportes, de Controle e Automação, Mecatrônica).
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 flex justify-center w-full sm:w-auto p-4">
          <Image
            src="/woman.jpg"
            alt="woman"
            width={500}
            height={100}
            className="w-[100%] h-auto sm:w-[100%] sm:h-auto md:w-[100%] md:h-[500px] lg:w-[100%] object-contain rounded-lg"
            objectFit="cover"
          />
        </div>
      </div>
      <div
        style={{ fontFamily: "Century-Gothic-Bold, sans-serif" }}
        className="bg-[#003057] flex w-full justify-center items-center py-10 h-10 pb-20"
      >
        <button
          className="bg-[#71CC98]  text-2xl p-3 w-[250px] rounded-3xl font-weight-700 text-[#003057] cursor-pointer hover:bg-[#003057] hover:text-[#71CC98] hover:border-[#71CC98] hover:border
          "
          onClick={() => {
            window.open(
              "https://candidate.atsglobe.com/#/login/candidacy-registration/2995",
              "_blank"
            );
          }}
        >
          INSCREVA-SE
        </button>
      </div>
    </>
  );
}
