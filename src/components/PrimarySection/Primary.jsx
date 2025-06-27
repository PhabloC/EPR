import Image from "next/image";

export default function Primary() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        src="/banner.png"
        alt="Promotional banner"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        priority
        quality={75}
      />
    </div>
  );
}
