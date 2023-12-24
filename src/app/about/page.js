"use client";
import { useRouter } from "next/navigation";
import Form from "./form";
const AboutPage = () => {
  const router = useRouter();
  return (
    <>
      <div> Info about Developers</div>
      <button onClick={() => router.push("/about/developers")}>
        Developers Info
      </button>
      <Form />
    </>
  );
};

export default AboutPage;
