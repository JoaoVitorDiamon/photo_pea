interface ButtonScreenshotProps {
    action: () => void;
}


export const ButtonScreenshot = ({ action }: ButtonScreenshotProps) => {
    return (
        <button
        onClick={action}
        className="absolute bottom-10 left-1/2  -translate-x-1/2 w-[70px] h-[70px] rounded-full
          border-[4px] border-white bg-white/30 backdrop-blur cursor-pointer"/>
    )
}
