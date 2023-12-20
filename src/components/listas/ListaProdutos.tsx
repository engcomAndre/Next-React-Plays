import Produto from "@/model/Produtos"
import ProdutoItem from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[],
    comprar: (produto: Produto) => void
}

export default function ListaProdutos(props: ListaProdutosProps){
    const { produtos } = props
    return (
        <div className={`
            flex flex-wrap gap-5
        `}>
            {produtos.map(
                produto => <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar}/>
            )}
        </div>
    )


}