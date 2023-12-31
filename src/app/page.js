"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PdfViewer from "./components/PdfViewer";

export default function Home() {
  const router = useRouter()
  const [userArray,setUserArray] = useState([]);
  const [userFile,setUserFile] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const fetchData = await fetch("http://localhost:3000/api/users");
      const data = await fetchData.json();
      // console.log(data.result);
      setUserArray(data.result)
    };
    getUsers();
  },[]);
  useEffect(() => {
    const getFiles = async () => {
      const fetchData = await fetch("http://localhost:3000/api/upload");
      const data = await fetchData.json();
      // console.log(data.result);
      setUserFile(data.result)
    };
    getFiles();
  },[]);

  const HandleClick = () => {
    alert("Namaste !!!");
  };

  const HandleDelete = async(id)=>{
    try {
      const fetchData = await fetch(`http://localhost:3000/api/users/${id}`, { method: "DELETE" });
      const data = await fetchData.json();

      if (data.success) {
        alert("Deleted");
        setUserArray(e=>e.filter(item=>item._id!==id))
      } else {
        alert("Deletion failed");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }
  return (
    <main className={styles.main}>
      <Image
        src={
          "https://www.krishnatemple.com/wp-content/uploads/2022/04/Festival_Gita_Jayanti.jpg"
        }
        alt="gita"
        width={400}
        height={200}
      />
      <div>Welcome to Vedic Library</div>
      <button onClick={HandleClick}>Welcome Note</button>
      <div>
        {
          userArray.map((item)=>{
            return(
              item.name  && <div>
                <h1>Name: {item.name}</h1>
                <Link href={ `about/users/${item._id}`}><button>Full Info</button></Link>
                <Link href={`about/users/edit/${item._id}`}><button>Edit Info</button></Link>
                <button onClick={()=>HandleDelete(item._id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          userFile.map((item)=>{
            return(
              item.file  && <div>
                <h1>type: {item.type}</h1>
                <h1>numbere: {item.number}</h1>
                <Image src={item.file} alt={item.type} width={200} height={200} />
                {/* <iframe
                  src={item.file}
                  title={item.type}
                  width="800"
                  height="600"
                  frameBorder="0"
                  scrolling="auto"
                /> */}
                {/* <PdfViewer url={item.file}/> */}
              </div>
            )
          })
        }
      </div>
    </main>
  );
}
