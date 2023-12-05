import Link from "next/link";

const chapter = [
  {
    number: 1,
    name: "अर्जुनविषादयोग",
  },
  {
    number: 2,
    name: "सांख्ययोग",
  },
  {
    number: 3,
    name: "कर्मयोग",
  },
  {
    number: 4,
    name: "ज्ञानकर्मसंन्यासयोग",
  },
];

const GitaPage = () => {
  return (
    <>
      <h1> Gita Page</h1>
      {chapter.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              backgroundColor: "#77B3FF",
              marginBottom: "20px",
              alignItems:"center"
            }}
            key={item.number}
          >
            <h3>{`Chapter ${item.number}:`}</h3>
            <h3 style={{marginLeft:"10ppx",marginRight:"10px"}}> {item.name}</h3>
            <Link href={`gita/chapters/${item.number}`}>view</Link>
          </div>
        );
      })}
    </>
  );
};

export default GitaPage;
