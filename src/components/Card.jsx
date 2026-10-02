import { ArrowUp } from "lucide-react"
const Card = (props) => {
    return (
        <div className="card w-1/3 text-2xl bg-white font-semibold p-2 rounded-2xl self-start shrink-0">
            <h1 style={{backgroundColor:props.user.color}} className="p-4 rounded-md"> {props.user.title}</h1>
            <div className="flex justify-around items-center mt-4">
                <h1 className="text-4xl font-semibold">{props.user.value} <br /> <span className="text-2xl capitalize opacity-70 font-lighter">since last week</span></h1>
                <p style={{color:props.user.textColor}} className="flex items-center justify-center self-end bg-green-200 px-2 py-1 text-sm font-bold tracking-wide rounded-md"> <ArrowUp /> {props.user.change}  </p>
            </div>
        </div>
    )
}

export default Card