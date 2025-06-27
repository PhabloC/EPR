import Image from "next/image";

export default function Header() {
  return (
    <div style={{ fontFamily: "Century-Gothic-Bold, sans-serif" }}>
      <header className="bg-[#F5F5F5] flex w-full p-4 justify-between items-center pl-8 pr-8">
        <div>
          <a href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </a>
        </div>
        <div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a className="text-[#003057] hover:text-[#71CC98]" href="#">
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a className="text-[#003057] hover:text-[#71CC98]" href="#">
                  Sobre o Programa
                </a>
              </li>
              <li>
                <a className="text-[#003057] hover:text-[#71CC98]" href="#">
                  Oportunidades
                </a>
              </li>
              <li>
                <a className="text-[#003057] hover:text-[#71CC98]" href="#">
                  Pré-requisitos
                </a>
              </li>
              <li>
                <a className="text-[#003057] hover:text-[#71CC98]" href="#">
                  Etapas
                </a>
              </li>
              <li>
                <a className="text-[#003057] hover:text-[#71CC98]" href="#">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button
            className="bg-[#71CC98] p-1 w-[160px] rounded-3xl font-weight-700 text-[#003057] cursor-pointer
          hover:bg-[#003057] hover:text-[#71CC98]"
          >
            INSCREVA-SE
          </button>
        </div>
      </header>
    </div>
  );
}
