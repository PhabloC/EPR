import Image from "next/image";
export default function Etapas() {
  return (
    <>
      <div id="etapas" className="flex flex-col items-center pt-10 w-full p-20">
        <div>
          <h1 className="text-[#003057] text-[24px] font-bold">
            ETAPAS DO PROCESSO
          </h1>
        </div>
        <div
          className="mt-20 w-full "
          style={{ position: "relative", height: "60vw", maxHeight: "80vh" }}
        >
          <Image
            src="/rotas.png"
            alt="rotas"
            fill
            style={{ objectFit: "contain" }}
            sizes="100vw"
            priority
            quality={100}
          />
        </div>
      </div>
    </>
  );
}
