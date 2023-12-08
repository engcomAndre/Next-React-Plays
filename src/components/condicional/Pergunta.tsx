import { useState } from "react"
import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import IfElse from "./IfElse"


interface PerguntaProps {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void

}
export default function Pergunta(props: PerguntaProps){

    return (
        <div className={`
         border border-white
         rounded-md
         cursor-pointer overflow-hidden 
         `}>
            <div className={`flex justify-between bg-zinc-800 p-5 cursor-pointer select-none `}
            onClick={() => props.alternarVisibilidade(props.indice)}>
                <span>{props.texto}</span>
                <IfElse teste={props.aberta}>
                    <IconChevronDown />
                    <IconChevronUp />
                </IfElse>
            </div>
            <If teste={props.aberta}>
            {props.aberta && (
                <div className={`p-5`}>
                    {props.resposta}
                </div>
            )}
            </If>
           
            
        </div>
    )
}