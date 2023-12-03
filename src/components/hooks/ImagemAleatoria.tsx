import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {
    const [pesquisa, alterarPesquisa]  = useState<string>('abstract')
    const [tamanho, alteraTamanho] = useState<number>(300)

    const url = 'https://source.unsplash.com/featured/'

  
    function renderizarBotao(valor: string) {

        
        return (
            <button className= {`
                bg-blue-500  px-4 py-2 rounded-md
            `
            } onClick={ () => alterarPesquisa(valor)}
            >
                {valor}
            </button>
        )
    }

    return (
        <div className={`
            flex flex-col gap-3 border border-zinc-500 p-7 rounded-md
        `}>
            <div className={` flex justify-center gap-7 m-5`}>
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image src={ `${url}/${tamanho}x${tamanho}?${pesquisa}`} height={300} width={300} alt="Imagem" />

            <div className={`flex gap-5 justify-between`}>
                {renderizarBotao('abstract')}        
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div>
                <input type="number" value={tamanho} 
                onChange={e => 
                    alteraTamanho(+e.target.value)
                }
                className={`
                    bg-zinc-800
                    p-2
                    rounded-md
                    outline-1
                `}
                
                />
            </div>            
        </div>
    )
}