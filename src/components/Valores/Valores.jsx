export default function Valores() {
  return (
    <div className="flex w-full h-[500px] justify-center items-center gap-8 p-40">
      <div
        className="bg-[#003057] text-white w-full h-[400px] p-12 rounded-[28px]  items-center
      flex flex-col font-bold"
      >
        <div>
          <h2 className="text-[24px] mb-5">NOSSOS VALORES</h2>
          <ul className="list-disc list-inside ">
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
        className="bg-[#81EAAE] text-[#003057] w-full h-[400px] p-12 rounded-[28px]  items-center
      flex flex-col font-bold"
      >
        <div className="w-[360px] flex flex-col top-0">
          <h2 className="text-[24px] mb-5 ">NOSSO DNA - JEITO EPR DE FAZER:</h2>
          <ul className="list-disc list-inside ">
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
