"use client";

import { useState } from "react";

function ChevronDown({ color = "#BBBBBB", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUp({ color = "#BBBBBB", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15l-6-6-6 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const faqs = [
  {
    question: "Preciso ter experiência anterior para me candidatar?",
    answer: "Não, o programa é voltado para recém-formados.",
  },
  {
    question: "Quais cursos são aceitos?",
    answer: "Todos os cursos de graduação reconhecidos pelo MEC.",
  },
  {
    question: "É necessário inglês fluente?",
    answer: "Não, o inglês não é obrigatório, mas pode ser um diferencial.",
  },
  {
    question: "Existe possibilidade de mudança de cidade?",
    answer:
      "Sim, pode haver necessidade de mobilidade conforme as vagas disponíveis.",
  },
];

export default function Perguntas() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <div
        id="perguntas"
        className="flex flex-col items-center pt-10 w-full px-4 sm:px-8 md:px-20 pb-8 md:pb-20"
      >
        <div>
          <h1 className="text-[#003057] text-2xl sm:text-3xl md:text-[35px] font-bold text-center">
            Perguntas Frequentes (FAQs)
          </h1>
        </div>
        <div className="w-full max-w-3xl mt-6 sm:mt-10 border-t border-[#DADADA]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="relative border-b border-[#DADADA]">
              <button
                className="w-full text-left py-3 sm:py-4 flex justify-between items-center focus:outline-none bg-transparent"
                onClick={() => handleToggle(idx)}
                style={{ borderBottom: "none" }}
              >
                <span className="font-bold text-[#003057] text-base sm:text-lg md:text-[20px]">
                  {faq.question}
                </span>
                <span className="text-[#003057] text-lg sm:text-xl">
                  {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden animate-fadeIn`}
                style={{
                  maxHeight: openIndex === idx ? "200px" : "0",
                  opacity: openIndex === idx ? 1 : 0,
                  padding: openIndex === idx ? "0.5rem 1rem" : "0 1rem",
                }}
              >
                {openIndex === idx && (
                  <div className="text-[#003057] text-sm sm:text-base md:text-[18px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
