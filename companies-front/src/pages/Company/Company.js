import { useParams } from "react-router-dom"

export default function Company(){
    let { id } = useParams();
    return <h1>{id} empresa</h1>
}