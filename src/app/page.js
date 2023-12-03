"use client"
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const HandleClick =()=>{
    alert("Namaste !!!")
  }
  return (
    <main className={styles.main}>
      <div>
        Welcome to Vedic Library
      </div>
      <button onClick={HandleClick}>
        Welcome Note
      </button>
    </main>
  )
}
