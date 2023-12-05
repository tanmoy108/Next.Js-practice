'use client'
import { useRouter } from "next/navigation"
const Chapter = ({params}) => {
  const router = useRouter()
    console.log(params)
    console.log(params.chapter)

    const HandleBack = ()=>{
      router.push("/gita")
    }

  return (
    <div>
      <h1>{`Chapter ${params.chapter}`}</h1>
      <button onClick={HandleBack} >back to the root</button>
    </div>
  )
}

export default Chapter