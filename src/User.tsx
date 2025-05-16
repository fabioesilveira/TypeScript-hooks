import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function User() {
    
    interface User {
        id: number;
        name: string;
        email: string;
      }

    const [data, setData] = useState< User | null>(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setData(req.data)
        }
        fetchApi();
    }, [id])

    return (
        <>
        <div>
            {!data ? <span>Loading...</span> : data.name}
        </div>
        </>
    )
}