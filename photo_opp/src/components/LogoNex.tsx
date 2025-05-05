import logoNext from '../assets/nexLab_Negativo.svg'

interface LogoNexProps {
    width: number;
    height: number;
}


export const LogoNext = ({width, height}: LogoNexProps) => {
    return (
        <div>
            <img src={logoNext} alt="Logo da Empresa Nex.Lab" width={width} height={height} />
        </div>
    )
}
