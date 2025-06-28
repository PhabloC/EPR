import Etapas from "@/components/Etapas/Etapas";
import Primary from "@/components/PrimarySection/Primary";
import Programa from "@/components/Programa/Programa";
import Sobre from "@/components/Sobre/Sobre";
import Valores from "@/components/Valores/Valores";
import Faqs from "@/components/Faqs/Faqs";

export default function Home() {
  return (
    <>
      <Primary />
      <Sobre />
      <Valores />
      <Programa />
      <Etapas />
      <Faqs />
    </>
  );
}
