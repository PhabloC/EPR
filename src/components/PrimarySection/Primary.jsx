"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Primary() {
  const banner2Ref = useRef(null);

  useEffect(() => {
    if (banner2Ref.current) {
      banner2Ref.current.animate(
        [
          { transform: "translateX(-100%)", opacity: 0 },
          { transform: "translateX(0)", opacity: 1 },
        ],
        {
          duration: 1200,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    }
  }, []);

  return (
    <div
      id="home"
      className="mt-20"
      style={{ position: "relative", width: "100%", height: "800px" }}
    >
      <Image
        src="/banner.png"
        alt="Promotional banner"
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        priority
        quality={100}
      />
      <div
        ref={banner2Ref}
        style={{
          position: "absolute",
          left: "100px",
          top: "30%",
          transform: "translateX(-100%) translateY(-50%)",
          opacity: 0,
          zIndex: 2,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          pointerEvents: "none",
          width: "600px",
          height: "300px",
        }}
      >
        <Image
          src="/banner2.png"
          alt="Banner 2"
          width={600}
          height={300}
          style={{ marginLeft: 0, marginRight: "auto" }}
          quality={100}
        />
      </div>
    </div>
  );
}
