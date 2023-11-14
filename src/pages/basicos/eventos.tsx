import Evento from "@/components/basicos/Evento";

export default function PaginaEventos() {
    return (
        <div className={`
        flex justify-center flex-wrap gap-5 items-center bg-purple-900 h-screen
        `}>
            <Evento text="Event 1" />
            <Evento text="Event 2"/>
            <Evento text="Event 3"/>
        </div>
    )
}