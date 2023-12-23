import { useParams } from "react-router-dom"

export default function Perfil(){
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            <p>Bienvenido al perfil de {name}</p>
        </div>
    )
}