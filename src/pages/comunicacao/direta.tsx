import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta(){
    return (
        <div className={`
              flex flex-col 
              justify-center items-center h-screen
              gap-5
            bg-blue-500
         `}>
            <h1 className={`text-5xl`}>Comunicação Direta</h1>
            <Avo nome="Raimundo" sobrenome="Vieira"/>
        </div>
    )
}