import Link from "next/link";
import Button from "./button";
import styles from "../../page.module.css"

export async function dbSlok() {
  const fetchApi = await fetch("http://localhost:3000/api/gita");
  const json = await fetchApi.json();
  return json.result;
}

const Chapter = async ({ params }) => {
  // console.log(params);
  // console.log(params.chapter);
  const fun = await dbSlok()
  console.log(fun)

  return (
    <div>
      <h1>{`Chapter ${params.chapter}`}</h1>
      <Button />
      <br/>
      {
        fun.map((item)=>{
          return(
            <Link className={styles.main} href={`${params.chapter}/slok/${item.id}`}>
              ={item.description}
            </Link>

          )
        })
      }
    </div>
  );
};

export default Chapter;
