import { text } from "stream/consumers"

interface TabelaSerieAProps {
    times: string[]
}
export default function TabelaSerieA(props: TabelaSerieAProps){

    const items: any[] = []

    /* for(let i = 0; i < props.times.length ; i++){
        items.push(<li 
            key={props.times[i]}
            className="text-xl list-decimal"
            >{props.times[i]}</li>)
    } */

    const items2 = props.times.map(
        (time, i) => 
        <li 
            key={time}
            className= {`text-xl list-decimal ${i % 2 === 0 ? 'text-red-500': 'text-blue-800' } `}
            >{time}</li>
    )

    return (
        <ol>
            {items2}            
        </ol>
    )
}