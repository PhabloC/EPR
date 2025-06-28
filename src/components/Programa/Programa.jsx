import Image from "next/image";

export default function Programa() {
  return (
    <>
      <div
        id="programa"
        className="bg-[#003057] w-full flex flex-col justify-center items-center pt-25 "
      >
        <div>
          <Image src="/selos.png" alt="selo" width={400} height={400} />
        </div>
        <div className="text-white w-[800px] mt-20">
          <h1 className="text-[24px] font-bold">SOBRE O PROGRAMA</h1>
          <div className="text-[16px] mt-5">
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
        <div className="text-white w-[800px] mt-20">
          <h1 className="text-[24px] font-bold">REMUNERAÇÃO E BENEFÍCIO:</h1>
          <div className="flex gap-20 mt-20 justify-between border-b-3 border-white pb-10">
            <div className="flex items-center gap-8">
              <Image src="/carta.png" alt="carta" width={100} height={100} />
              <div>
                <h3 className="text-[16px] font-bold">SALÁRIO TRAINEE:</h3>
                <p>
                  Fixo <strong>R$7.000,00</strong>{" "}
                </p>
                <p>
                  + <strong>R$ 2.000</strong> ajuda de custo
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Image src="/pizza.png" alt="pizza" width={100} height={100} />
              <div className="w-[150px]">
                <h3 className="text-[16px] font-bold">
                  PARTICPAÇÃO NOS LUCROS E RESULTADOS:
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 mt-10 ">
            <div className="flex items-center gap-8 justify-between w-full">
              <div className="flex flex-col items-center gap-4 w-[200px]">
                <Image src="/medico.png" alt="medico" width={80} height={80} />
                <p className="text-[16px] font-bold">Assistência Médica</p>
              </div>
              <div className="flex flex-col items-center gap-4 w-[200px]">
                <Image src="/fork.png" alt="fork" width={80} height={80} />
                <p className="text-[16px] font-bold">Vale Refeição</p>
              </div>
              <div className="flex flex-col items-center gap-4 w-[200px]">
                <Image src="/tooth.png" alt="tooth" width={80} height={80} />
                <p className="text-[16px] font-bold">
                  Assistência Odontológica
                </p>
              </div>
            </div>
            <div className="flex gap-8 justify-center w-full">
              <div className="flex flex-col items-center gap-4 w-[200px]">
                <Image src="/wheel.png" alt="wheel" width={65} height={65} />
                <p className="text-[16px] font-bold text-center">
                  Vale Transporte/Fretado ou Estacionamento
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 w-[200px]">
                <Image src="/life.png" alt="life" width={80} height={80} />
                <p className="text-[16px] font-bold ">Seguro de Vida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="oportunidades"
        className="flex flex-col items-center pt-20 bg-[#003057]"
      >
        <div className="bg-white border-5 border-[#FFA500] rounded-[28px] w-[90%] p-20 pl-40 mt-10">
          <h1 className="text-[#003057] font-bold text-[24px]">
            OPORTUNIDADES
          </h1>
          <div className="mt-15 gap-8 text-[#003057]">
            <p className="mb-8 w-[1000px]">
              No Programa de Trainee EPR 2025, você poderá atuar em áreas
              estratégicas da companhia, desenvolvendo competências essenciais
              para sua carreira. <strong>Confira as principais frentes:</strong>
            </p>
            <div className="mt-15">
              <h2 className="text-[20px] font-bold text-[#FBB717]">
                Gestão de Negócios e Projetos
              </h2>
              <p className="mb-8">
                Atuação em iniciativas estratégicas, com foco em planejamento,
                execução e resultados.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[20px] font-bold text-[#FBB717]">
                Finanças e Controladoria
              </h2>
              <p className="mb-8">
                Análises financeiras, controle orçamentário e apoio à tomada de
                decisões.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[20px] font-bold text-[#FBB717]">
                Jurídico e Governança{" "}
              </h2>
              <p className="mb-8">
                Atuação com temas contratuais, regulatórios e de compliance.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[20px] font-bold text-[#FBB717]">
                Tecnologia e Inovação{" "}
              </h2>
              <p className="mb-8">
                Projetos de transformação digital, automação e soluções
                tecnológicas.{" "}
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-[20px] font-bold text-[#FBB717]">
                Engenharia e Operações{" "}
              </h2>
              <p className="mb-8">
                Vivência prática em obras, planejamento técnico e
                infraestrutura.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="requisitos" className="bg-[#003057] p-20 flex justify-between ">
        <div className="w-[800px] ">
          <h1 className="text-[#FBB717] font-bold text-[35px] sans-serif">
            PRÉ-REQUISITOS
          </h1>
          <div className="text-white mt-10">
            <p>
              Graduação concluída entre <strong>junho de 2023</strong> e{" "}
              <strong>junho de 2025</strong>, nos seguintes cursos:
            </p>

            <ul className=" list-disc list-inside mt-8">
              <li className="mb-6">
                Administração, Administração com ênfase em Análise de Sistemas,
                Administração com ênfase em Ciências Contábeis, Administração
                com ênfase em Estratégia, Administração com ênfase em Finanças,
                Administração com ênfase em Gestão de Projetos, Administração
                com ênfase em Negócios, Administração com ênfase em Sistemas da
                Informação, Administração Pública{" "}
              </li>
              <li className="mb-6">Ciências Econômicas </li>
              <li className="mb-6">Direito</li>
              <li className="mb-6">Economia Empresarial e Controladoria </li>
              <li className="mb-6">
                Engenharias (Civil, Eletromecânica, Elétrica, Eletrônica
                Mecânica, de Mobilidade, de Produção, de Produção Elétrica, de
                Produção Mecânica, de Gestão, Industrial, de Transportes, de
                Controle e Automação, Mecatrônica)
              </li>
              <li className="mb-6">
                Disponibilidade para mobilidade entre áreas e localidade
              </li>
              <li>
                Possuir Carteira Nacional de Habilitação (CNH), categoria B
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image src="/woman.png" alt="woman" width={500} height={100} />{" "}
        </div>
      </div>
    </>
  );
}
