import Button from "./button";

export async function dbSlok(number) {
    const fetchApi = await fetch(`http://localhost:3000/api/gita/${number}`);
    const json = await fetchApi.json();
    return json.result[0];
}

const Page = async ({params}) => {
    console.log(params.slokNumber)
    const data = await dbSlok(params.slokNumber)
    console.log(data)
  return (
    <div>
        <h3>{data.author_name}</h3>
        <p>{data.description}</p>
        <span>{data.language}</span>
        <br/>
        <Button props={params.chapter}/>
    </div>
  )
}

export default Page