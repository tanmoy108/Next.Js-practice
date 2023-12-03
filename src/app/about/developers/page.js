"use client"
import { useRouter } from "next/navigation"
const AboutDevelopersPage = () => {
    const router = useRouter();
    return (
        <>
            <div> Tanmoy</div>
            <button onClick={() => router.push("/about")} >Back</button>
        </>

    )
}

export default AboutDevelopersPage