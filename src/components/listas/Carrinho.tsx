import ItemCarrinho from "@/model/ItemCarrinho";
import CarrinhoItem from "./CarrinhoItem";
import CarrinhoVazio from "./CarrinhoVazio";
import Moeda from "@/utils/Moeda";

interface CarrinhoProps {
  itens: ItemCarrinho[];
}
export default function Carrinho(props: CarrinhoProps) {
  const { itens } = props;

  const total = itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco}
    ,0)


  return (
    <div
      className={`flex flex-col border border-white rounded-md overflow-hidden w-4/5`}
    >
      <div
        className={`flex justify-between items-center bg-zinc-800 text-3xl p-3`}
      >        
        <span>Carrinho</span>
        <span>{Moeda.formatarMoeda(total)}</span>
      </div>
      <div className={`flex p-5 gap-5`}>
        {itens.length === 0 ? <CarrinhoVazio/> : (
            itens.map((item, i) => { return <CarrinhoItem key={i} carrinho={item} /> })
        )}
      </div>
    </div>
  );
}
