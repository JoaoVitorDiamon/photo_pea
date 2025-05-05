interface ButtonProps {
    text: string;
    action?: () => void;
    className?: string;
   }

export const PrimaryButton = ({text, action, className}: ButtonProps) => {
    return (
        <div>
            <button
            onClick={action}
            className={`bg-button  py-2 px-10 font-family-titillium text-3xl cursor-pointer ${className} `}
            >
                {text}
            </button>
        </div>
    )
}
