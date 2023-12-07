interface DisplayProps {
    valor : number
}

export default function Display(props: DisplayProps){
    return (
        <div className={`
            flex justify-center items-center flex-1
            gap-2 pt-2
            text-5xl font-black p-5
            bg-zinc-800 rounded-md

        `}>
            {props.valor}
        </div>
    )

}