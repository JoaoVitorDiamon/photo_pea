import { useEffect, useRef, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import Webcam from "react-webcam";
import { ButtonScreenshot } from "../components/ButtonScreenshot";
import { CustomWebcam } from "../components/CustomWebcam";
import router from "../routes";

export const CapturePhoto = () => {
  const webcamRef = useRef<Webcam>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasPermission(true);
        stream.getTracks().forEach((track) => track.stop());
      } catch (err) {
        setError("Permissão de câmera negada!");
      } finally {
        setIsLoadingPage(false);
      }
    };

    requestPermission();
  }, []);

  const takePhoto = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      router.navigate("/previewPhoto", { state: { photo: imageSrc } });
    }
  };

  if (isLoadingPage) {
    return (
      <div className="flex items-center justify-center h-screen">
        <OrbitProgress color="#999999" size="medium" text="" />
      </div>
    );
  }
  return (
    <div className="w-full h-screen">
      <CustomWebcam ref={webcamRef} />
      <ButtonScreenshot action={takePhoto} />
    </div>
  );
};
