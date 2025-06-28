import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between items-center w-full h-40 px-40 bg-[#003057]">
      <div className="flex gap-4 justify-center items-center">
        <Image src="/logo2.png" alt="logo2" width={150} height={150} />
        <Image src="/cia.png" alt="cia" width={150} height={150} />
      </div>
      <div className="flex gap-4">
        <Image
          href="https://www.linkedin.com/"
          src="/linkedin.png"
          alt="linkedin"
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <Image
          href="https://www.youtube.com/"
          src="/youtube.png"
          alt="youtube"
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <Image
          href="https://www.facebook.com/"
          src="/facebook.png"
          alt="facebook"
          width={40}
          height={40}
          className="cursor-pointer"
        />
        <Image
          href="https://www.instagram.com/"
          src="/instagram.png"
          alt="instagram"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
