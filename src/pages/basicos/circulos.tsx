import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos(){
    return (
        <div className={
            `
            flex justify-between items-center h-screen             
            `
        }>
           <Circulo texto="Circle 1"/>        
           <Circulo texto="Circle 2"/>        
           <Circulo texto="Circle 4" quasePerfeito/>        
           <Circulo texto="Circle 3"/>        
           <Circulo texto="Circle 4" quasePerfeito/>        
        </div>
    )

}