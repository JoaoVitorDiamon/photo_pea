import { useLocation } from 'react-router-dom';
import { PhotoFrameWithQrCode } from '../components/PhotoFrameWithQrCode';

export default function FinishPage() {
  const location = useLocation();
  const photo = location.state?.photo;
  const qrCode = location.state?.qrCode;

  return (
    <div className="w-full h-screen flex flex-col justify-around items-center bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
      <PhotoFrameWithQrCode image={photo} qrCode={qrCode} />
    </div>
  );
}
