import { useLocation } from 'react-router-dom';
import { useEffect,  useState } from 'react';
import { PhotoFrame } from '../components/PhotoFrame';


export default function PreviewPhoto() {
  const location = useLocation();
  const photo = location.state?.photo;
  const [count, setCount] = useState(3);
  const [showPhoto, setShowPhoto] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowPhoto(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {!showPhoto && (
        <div className="text-black text-9xl font-bold font-family-titillium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {count}
        </div>
      )}

        {showPhoto && (
        <div className='flex justify-center items-center'>
           <PhotoFrame image={photo}/>
        </div>
        )}
    </div>
  );
}
