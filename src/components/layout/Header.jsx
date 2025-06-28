"use client";

import Image from "next/image";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Century-Gothic-Bold, sans-serif" }}>
      <header
        className="bg-[#F5F5F5] flex w-full h-[80px] p-4 justify-between items-center pl-8 pr-8
      fixed top-0 z-50 shadow-md"
        style={{ minHeight: 80 }}
      >
        {/* Logo à esquerda */}
        <div className="flex-shrink-0">
          <a href="#home">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </a>
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:block">
          <nav>
            <ul className="flex gap-8">
              <li>
                <a
                  className="text-[#003057] hover:text-[#71CC98]"
                  href="#empresa"
                >
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a
                  className="text-[#003057] hover:text-[#71CC98]"
                  href="#programa"
                >
                  Sobre o Programa
                </a>
              </li>
              <li>
                <a
                  className="text-[#003057] hover:text-[#71CC98]"
                  href="#oportunidades"
                >
                  Oportunidades
                </a>
              </li>
              <li>
                <a
                  className="text-[#003057] hover:text-[#71CC98]"
                  href="#requisitos"
                >
                  Pré-requisitos
                </a>
              </li>
              <li>
                <a
                  className="text-[#003057] hover:text-[#71CC98]"
                  href="#etapas"
                >
                  Etapas
                </a>
              </li>
              <li>
                <a
                  className="text-[#003057] hover:text-[#71CC98]"
                  href="#perguntas"
                >
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Botão desktop */}
        <div className="hidden md:block">
          <button
            className="bg-[#71CC98] p-1 w-[160px] rounded-3xl font-weight-700 text-[#003057] cursor-pointer
          hover:bg-[#003057] hover:text-[#71CC98]"
          >
            INSCREVA-SE
          </button>
        </div>
        {/* Ícone do menu mobile no canto direito */}
        <button
          className="block md:hidden absolute right-6 top-4 z-50 bg-white rounded-full p-2 shadow-md"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
        >
          <AlignRight size={32} color="#003057" />
        </button>
      </header>
      {/* Menu Mobile Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#F5F5F5] shadow-lg z-60 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ minHeight: "100vh" }}
      >
        {/* Botão X para fechar o menu mobile */}
        <button
          className="absolute top-4 right-4 z-70 p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X />
        </button>
        <nav className="flex flex-col gap-8 p-8 pt-24">
          <a
            className="text-[#003057] hover:text-[#71CC98] text-lg font-bold"
            href="#empresa"
            onClick={() => setMenuOpen(false)}
          >
            Sobre a Empresa
          </a>
          <a
            className="text-[#003057] hover:text-[#71CC98] text-lg font-bold"
            href="#programa"
            onClick={() => setMenuOpen(false)}
          >
            Sobre o Programa
          </a>
          <a
            className="text-[#003057] hover:text-[#71CC98] text-lg font-bold"
            href="#oportunidades"
            onClick={() => setMenuOpen(false)}
          >
            Oportunidades
          </a>
          <a
            className="text-[#003057] hover:text-[#71CC98] text-lg font-bold"
            href="#requisitos"
            onClick={() => setMenuOpen(false)}
          >
            Pré-requisitos
          </a>
          <a
            className="text-[#003057] hover:text-[#71CC98] text-lg font-bold"
            href="#etapas"
            onClick={() => setMenuOpen(false)}
          >
            Etapas
          </a>
          <a
            className="text-[#003057] hover:text-[#71CC98] text-lg font-bold"
            href="#perguntas"
            onClick={() => setMenuOpen(false)}
          >
            Perguntas Frequentes
          </a>
          <button
            className="bg-[#71CC98] p-2 w-full rounded-3xl font-weight-700 text-[#003057] cursor-pointer hover:bg-[#003057] hover:text-[#71CC98] mt-8"
            onClick={() => setMenuOpen(false)}
          >
            INSCREVA-SE
          </button>
        </nav>
      </div>
      {/* Overlay para fechar o menu ao clicar fora */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}
