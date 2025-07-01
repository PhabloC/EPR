"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Etapas() {
  const fadeRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = fadeRef.current;
    if (!el) return;
    el.style.opacity = 0;
    el.style.transform = "translateY(60px) scale(0.97)";
    el.style.transition =
      "opacity 1.2s cubic-bezier(0.33, 1, 0.68, 1), transform 1.2s cubic-bezier(0.33, 1, 0.68, 1)";

    function isInViewport(element) {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight - 80 && rect.bottom > 0;
    }

    function animate() {
      if (!animated.current && isInViewport(el)) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0) scale(1)";
        animated.current = true;
      }
    }

    window.addEventListener("scroll", animate, { passive: true });
    setTimeout(animate, 100);
    return () => window.removeEventListener("scroll", animate);
  }, []);

  return (
    <>
      <div
        ref={fadeRef}
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
      <div
        style={{ fontFamily: "Century-Gothic-Bold, sans-serif" }}
        className="flex w-full justify-center items-center py-10"
      >
        <button
          className="bg-[#71CC98] text-2xl p-3 w-[250px] rounded-3xl font-weight-700 text-[#003057] cursor-pointer hover:bg-[#003057] hover:text-[#71CC98]"
          onClick={() => {
            window.open(
              "https://candidate.atsglobe.com/#/login/candidacy-registration/2995",
              "_blank"
            );
          }}
        >
          INSCREVA-SE
        </button>
      </div>
    </>
  );
}
