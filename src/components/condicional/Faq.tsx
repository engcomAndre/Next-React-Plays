import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState<number>(-1);

  function alternarVisibilidade(indice: number) {
    if(indice === ativo){
        setAtivo(-1)
    } else {
        setAtivo(indice)
    }
  }

  return (
    <div className={`flex flex-col gap-2 w-[90%] md:w-3/4`}>
      <Pergunta
        texto="Qual a sua pergunta?"
        resposta="Qual a resposta da pergunta..."
        alternarVisibilidade={alternarVisibilidade}
        indice={0}
        aberta={ativo === 0}
      />
      <Pergunta
        texto="Qual a sua pergunta?"
        resposta="Qual a resposta da pergunta..."
        alternarVisibilidade={alternarVisibilidade}
        indice={1}
        aberta={ativo === 1}
      />
      <Pergunta
        texto="Qual a sua pergunta?"
        resposta="Qual a resposta da pergunta..."
        alternarVisibilidade={alternarVisibilidade}
        indice={2}
        aberta={ativo === 2}
      />
      <Pergunta
        texto="Qual a sua pergunta?"
        resposta="Qual a resposta da pergunta..."
        alternarVisibilidade={alternarVisibilidade}
        indice={3}
        aberta={ativo === 3}
      />
    </div>
  );
}
