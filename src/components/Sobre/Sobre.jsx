export default function Sobre() {
  return (
    <div
      id="empresa"
      style={{ fontFamily: "Century-Gothic, sans-serif" }}
      className="flex justify-center items-center p-4 sm:p-6 md:p-8"
    >
      <div className="border-4 border-[#FFA500] rounded-[20px] w-[90%] p-4 sm:p-8 md:p-16 lg:p-20 mt-6 md:mt-10 bg-white shadow-md">
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
