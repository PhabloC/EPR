import Image from "next/image";
export default function Etapas() {
  return (
    <>
      <div
        id="etapas"
        className="flex flex-col items-center pt-20 w-full px-4 sm:px-8 md:px-16 lg:px-20 pb-8 md:pb-20 "
      >
        <div>
          <h1 className="text-[#003057] text-xl sm:text-2xl md:text-3xl font-bold text-center">
            ETAPAS DO PROCESSO
          </h1>
        </div>
        <div
          className="md:mt-30 sm:mt-10 w-full"
          style={{
            position: "relative",
            height: "60vw",
            maxHeight: 500,
            minHeight: 220,
          }}
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
