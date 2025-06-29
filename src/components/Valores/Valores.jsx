export default function Valores() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] justify-center items-center gap-6 md:gap-8 p-8 sm:p-8 md:p-12 md:pl-40 md:pr-40">
      <div className="bg-[#003057] text-white w-full h-[320px] sm:h-[380px] md:h-[400px] p-6 sm:p-10 md:p-12 rounded-[18px] flex flex-col items-center  font-bold mb-4 md:mb-0 mx-auto">
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
      <div className="bg-[#81EAAE] text-[#003057] w-full h-[320px] sm:h-[380px] md:h-[400px] p-6 sm:p-10 md:p-12 rounded-[18px] flex flex-col items-center font-bold mx-auto">
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
