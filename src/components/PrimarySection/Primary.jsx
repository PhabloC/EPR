import Image from "next/image";

export default function Primary() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        src="/banner.png"
        alt="Promotional banner"
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        priority
        quality={100}
      />
    </div>
  );
}
