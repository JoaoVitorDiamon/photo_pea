
interface PlaceholderProps {
 text: string;
}

export const Placeholder = ({ text }: PlaceholderProps) => {
    return (
        <div>
            <h3 className="font-family-titillium text-[100px] text-center font-bold">
                {text}
            </h3>
        </div>
    );


}
