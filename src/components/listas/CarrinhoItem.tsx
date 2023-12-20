import ItemCarrinho from "@/model/ItemCarrinho";
import Moeda from "@/utils/Moeda";

interface CarrinhoItemProps{
    carrinho: ItemCarrinho
}

export default function CarrinhoItem(props: CarrinhoItemProps){
    const { carrinho } = props

    return (
        
            <div className={`
                flex items-center gap-2 rounded-full bg-blue-500
            `}>
                <span className={`
                    flex justify-center items-center gap-2
                    w-7 h-7 p-2 bg-blue-700 rounded-full 
                `}>{carrinho.quantidade}</span>
                <span>
                    {carrinho.produto.nome}
                </span>
                <span className={`
                    pr-5
                `}>
                    {Moeda.formatarMoeda(carrinho.produto.preco * props.carrinho.quantidade)}                    
                </span>
            </div>        
    )

}