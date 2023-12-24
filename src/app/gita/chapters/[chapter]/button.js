'use client'
import { useRouter } from "next/navigation"
export default function Button(){
    const router = useRouter()
    const HandleBack = () => {
        router.push("/gita")
    }
    return(
        <button onClick={HandleBack} >back to the root</button>
    )
}