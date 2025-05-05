import { PrimaryButton } from "../components/Button"
import { LogoNext } from "../components/LogoNex"
import { Placeholder } from "../components/Placeholder"
import router from "../routes"

function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col justify-around items-center bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
            <LogoNext width={150} height={150} />
            <Placeholder text="Photo Opp" />
            <PrimaryButton action={() => router.navigate('/capturePhoto')} text="Iniciar" />
        </div>
    )
}

export default HomePage
