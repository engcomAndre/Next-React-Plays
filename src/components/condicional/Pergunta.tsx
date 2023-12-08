import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./IfElse"


interface PerguntaProps {
    texto: string
    resposta: string
}
export default function Pergunta(props: PerguntaProps){

    const [aberta, setAberta] = useState<boolean>(false)

    

    return (
        <div className={`
         border border-white
         rounded-md
         cursor-pointer overflow-hidden 
         `}>
            <div className={`flex justify-between bg-zinc-800 p-5 cursor-pointer select-none `}
            onClick={() => setAberta(!aberta)}>
                <span>{props.texto}</span>
                <IfElse teste={aberta}>
                    <IconChevronDown />
                    <IconChevronUp />
                </IfElse>
            </div>
            <If teste={aberta}>
            {aberta && (
                <div className={`p-5`}>
                    {props.resposta}
                </div>
            )}
            </If>
           
            
        </div>
    )
}