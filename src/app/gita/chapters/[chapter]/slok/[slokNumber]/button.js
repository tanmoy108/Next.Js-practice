'use client'
import { useRouter } from "next/navigation"

const Button = ({props}) => {
    const router = useRouter();
    console.log(props)
    const HandleBack = () => {
        router.push(`/gita/chapters/${props}`)
    }

  return (
      <button onClick={HandleBack}>back</button>
  )
}

export default Button