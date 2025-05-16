import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {

    interface User {
        id: number;
        name: string;
        email: string;
      }

    const [data, setData] = useState<User[] | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchApi() {
            const req = await axios.get("https://jsonplaceholder.typicode.com/users")
            setData(req.data)
        }
        fetchApi();
    }, [])

    function handleNavigate(id:any) {
        navigate(`user/${id}`)
    }

    return (
        <>
            <div>
                {!data ? <span>Loading...</span> : data.map((e) => (
                    <div key={e.id} onClick={() => handleNavigate(e.id)}>
                        <h2>{e.name}</h2>
                        <h3>{e.email}</h3>
                    </div>
                ))}
                    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            </div>
        </>
    )
}