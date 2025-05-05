import Webcam from "react-webcam"
import { videoConstraints } from "../config/videoConstraints"



export const CustomWebcam = ({...rest}) => {
    return (
    <Webcam {...rest}
    audio={false}
    screenshotFormat="image/jpeg"
    videoConstraints={videoConstraints}
    className="w-full h-full object-cover"
    />
    )
}
