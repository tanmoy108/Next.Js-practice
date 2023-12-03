import Link from "next/link";

const chapter = [
  {
    number: 1,
    name: "arjun",
  },
  {
    number: 2,
    name: "krishna",
  },
  {
    number: 3,
    name: "veem",
  },
  {
    number: 4,
    name: "duryodhan",
  },
];

const GitaPage = () => {
  return (
    <>
      <h1> Gita Page</h1>
      {chapter.map((item) => {
        return (
            <div style={{ display: "flex", backgroundColor:"#77B3FF",marginBottom:"20px"}} key={item.number}>
            <h3>{`Chapter ${item.number}: `}</h3>
            <h3> {item.name}</h3>
            <Link href={`gita/${item.number}`}>view</Link>
          </div>
        );
      })}
    </>
  );
};

export default GitaPage;
