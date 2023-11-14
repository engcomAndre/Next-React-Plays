interface EventoProps{
    text?: string
}
export default function Evento(props: EventoProps){

    let contador = 0

    function incrementar(){
        console.log(props.text + " - " +  contador++)
    }

    return (
        <button className={
            `
            flex justify-center items-center
            h-72 w-72 bg-green-600 text-4xl`
        } onClick={incrementar}>
            
            { props.text}</button>
    )
}