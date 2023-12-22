"use client"
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const HandleClick =()=>{
    alert("Namaste !!!")
  }
  return (
    <main className={styles.main}>
      <Image src={"https://www.krishnatemple.com/wp-content/uploads/2022/04/Festival_Gita_Jayanti.jpg"} width={400} height={200}/>
      <div>
        Welcome to Vedic Library
      </div>
      <button onClick={HandleClick}>
        Welcome Note
      </button>
    </main>
  )
}
