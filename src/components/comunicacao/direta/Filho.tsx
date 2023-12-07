
interface FilhoProps{
    nome: string
    sobrenome: string
}
export default function Filho(props: FilhoProps){
    return (
        <div className={`
        flex flex-col gap-5 p-5 rounded-md
        bg-green-500 text-white border border-white
    `}>
        <div className={`
            flex justify-center gap-2 text-2xl
        `}>
            <span className="font-black">Filho</span>
            <span>{props.nome}</span>
            <span>{props.sobrenome}</span>
        </div>
        <div className={`
            flex justify-center gap-5
        `}>         
        </div>                        
    </div>
    )
}