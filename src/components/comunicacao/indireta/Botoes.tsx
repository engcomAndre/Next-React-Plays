interface BotoesProps {
  inc: (valor: number) => void;
  dec: (valor: number) => void;
}
export default function Botoes(props: BotoesProps) {
  return (
    <div
      className={` flex justify-between pt-2 gap-2
        `}
    >
      <button className="botao flex-1" onClick={() => props.inc(10)}>
        Inc
      </button>
      <button className="botao flex-1" onClick={() => props.dec(7)}>
        Dec
      </button>
    </div>
  );
}
