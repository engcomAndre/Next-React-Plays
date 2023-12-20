import Produto from "@/model/Produtos";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import Moeda from "@/utils/Moeda";

interface ProdutoItemProps{
    produto: Produto
    comprar: (produto: Produto) => void
}
export default function ProdutoItem(props: ProdutoItemProps){
    const { produto } = props
    return (
        <div className={`

        flex flex-col border border-zinc-600 rounded-md p-1

        `}>
            <Image className={`
                rounded-md
            `}
                src={produto.imagem} 
                width={300} 
                height={200} 
                alt="Imagem do produto" />
                <div className={`
                    flex flex-col p-3 gap-3
                `}>
                    <div className={`flex justify-between items-center`}>
                        <div className={`text-2xl font-black`}>{produto.nome}</div>
                        <div className={`text-green-500 font-bold`}>{Moeda.formatarMoeda(produto.preco)}</div>
                    </div>
                    <div>
                        <div className={`text-gray-500 font-bold`}>{produto.descricao}</div>
                    </div>
                    <div>
                        <button className={`
                            flex w-full justify-center botao gap-2
                        `}
                        onClick={() => props.comprar(produto)}
                        >
                            <IconShoppingCart /> Comprar
                        </button>
                    </div>
                    
                </div>
        </div>
    )
}

