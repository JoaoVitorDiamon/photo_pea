import router from "../routes";

interface ModalObrigadoProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalObrigado = ({ isOpen, onClose }: ModalObrigadoProps) => {
  if (!isOpen) {

      return null;
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
  <div className="bg-white w-[320px] h-[204px] rounded-md flex flex-col items-center justify-center shadow-lg relative">
    <h2 className="text-5xl font-sans text-textFrame">Obrigado!</h2>
    <span className="text-2xl mt-2 text-center font-family-titillium text-textFrame">
      Lorem ipsum dolor sit amet consectetur.
    </span>
    <button
      onClick={() => {router.navigate("/"); onClose();}}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
    >
      ×
    </button>
  </div>
</div>

  );
};
