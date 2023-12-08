import Pergunta from "./Pergunta";

export default function Faq(){
    return (
        <div className={`flex flex-col gap-2 w-[90%] md:w-3/4`}>
            <Pergunta texto="Qual a sua pergunta?" resposta="Qual a resposta da pergunta..." />
            <Pergunta texto="Qual a sua pergunta?" resposta="Qual a resposta da pergunta..." />
            <Pergunta texto="Qual a sua pergunta?" resposta="Qual a resposta da pergunta..." />            
            <Pergunta texto="Qual a sua pergunta?" resposta="Qual a resposta da pergunta..." />           

        </div>
    )
}