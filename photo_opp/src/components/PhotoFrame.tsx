import html2canvas from "html2canvas";
import { useRef } from "react";
import router from "../routes";
import { PrimaryButton } from "./Button";
import { LogoNext } from "./LogoNex";

interface PhotoFrameProps {
  image: string;

}
export const PhotoFrame = ({ image }: PhotoFrameProps) => {
    const captureRef = useRef<HTMLDivElement | null>(null);
    const captureImage = async () => {
        if (!captureRef.current) return;

        const canvas = await html2canvas(captureRef.current, {
          backgroundColor: "transparent",
          scale: 2,
          logging: true,
          useCORS: true,

        });

        const imageBase64 = canvas.toDataURL("image/jpeg");

        try {
          const response = await fetch("https://0195-2804-14d-78a6-8fae-fc84-852-1807-628c.ngrok-free.app/images", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ base64: imageBase64 }),
          });

          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro ${response.status}: ${errorText}`);
          }

          const data = await response.json();

          if (!data.qrcode) {
            throw new Error("A resposta não contém 'qrcode'");
          }

          router.navigate("/finishPhoto", {
            state: {
              photo: imageBase64,
              qrCode: data.qrcode,
            },
          });
        } catch (error) {
          console.error("Erro ao enviar imagem:", error);
          alert(`Erro ao enviar imagem: ${error}`);
        }
      };




  return (
    <div className="bg-white   h-full" >
    <div ref={captureRef} className="flex bg-white  flex-col items-center justify-center">
      <div className="w-82 border border-black flex flex-col justify-between   px-4 ">
        <div className="flex flex-row justify-between items-end w-full mt-2">
          <img src="/src/assets/nexLab_Negativo.png" width={80} height={80} alt="" />
          <span className="font-family-titillium text-textFrame text-sm font-bold">we make tech simple_</span>
        </div>

        <div className="flex flex-col justify-center items-center mt-4 h-[500px]">
          <div className="w-full h-full  md:h-52 lg:h-60 xl:h-72 overflow-hidden ">
            <img
              src={image}
              alt="Foto tirada"
              className="object-fill rounded-lg"
              />
          </div>
        </div>
          <div className="flex  justify-center items-end w-full h-full my-2">
          <span className="font-family-titillium text-textFrame text-sm  font-bold">we make tech simple_</span>
          </div>
      </div>
    </div>

      <div className="flex flex-row justify-between items-center w-full mt-4 gap-4 px-4">
        <PrimaryButton
          action={() => {router.navigate('/')}}
          text="Refazer"
          className="text-sm bg-transparent border-1 border-button text-button w-full"
          />
        <PrimaryButton
          action={captureImage}
          text="Continuar"
          className="text-sm text-white bg-button w-full"
          />
      </div>
          </div>
  );
};
