"use client"
import { useRouter } from "next/navigation"
const AboutPage = () => {
    const router = useRouter();
    return (
        <>
            <div> Info about Developers</div>
            <button onClick={() => router.push("/about/developers")} >Developers Info</button>
        </>
    )
}

export default AboutPage