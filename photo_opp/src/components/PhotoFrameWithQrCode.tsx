import { useState } from "react";
import { PrimaryButton } from "./Button";
import { ModalObrigado } from "./ModalFinish";

interface PhotoFrameWithQrCodeProps {
  image: string;
  qrCode: string;
}

export const PhotoFrameWithQrCode = ({ image, qrCode }: PhotoFrameWithQrCodeProps) => {
    const [showModal, setShowModal] = useState(false);


  return (
    <div className=" h-full">
      <div className="flex bg-transparent flex-col items-center justify-center">
        <div className="w-82 flex flex-col justify-between px-4 relative">

          <div className="flex flex-col justify-center items-center mt-4 h-[570px]">
            <div className="w-full h-full md:h-52 lg:h-60 xl:h-72 overflow-hidden">
              <img
                src={image}
                alt="Foto tirada"

              />
            </div>
          </div>
          <div className="absolute bottom-20 right-6  border-gray-300 rounded-md p-1 w-24 h-28 shadow-sm bg-white">
            <p className="text-[10px] text-center  font-semibold">Fazer Download</p>
            <div className="w-full  flex items-center justify-center relative  rounded ">
              <img src={qrCode} alt="QR Code"  className="object-contain w-full h-full p-1" />
            </div>
          </div>

          <div className="flex justify-center items-end w-full h-full my-2">

          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center w-full mt-4 gap-4 px-4">
        <PrimaryButton
          action={() => {
            setShowModal(true);
          }}
          text="Finalizar"
          className="text-sm text-white bg-button w-full"
        />
      </div>
      <ModalObrigado isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
};
