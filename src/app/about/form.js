"use client";
import React, { useState } from "react";

const Form = () => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    gender: "",
    designation: "",
  });
  const [current, setCurrent] = useState(info);

  const handleType = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setInfo((value) => {
      return {
        ...value,
        [inputName]: inputValue,
      };
    });
  };

  const HandleClick = async () => {
    // setCurrent(() => {
    //   return {
    //     ...info,
    //   };
    // });

    try {
      console.log(info);
      const fetchResult = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        body: JSON.stringify(info),
        // headers: { "Content-Type": "application/json" },
      });
      if (!fetchResult.ok) {
        throw new Error(`HTTP error! Status: ${fetchResult.status}`);
      }
      console.log(fetchResult);
      const data = await fetchResult.json();
      if(data.success){
      alert("successed")}
      console.log(data)
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={info.name}
        onChange={handleType}
        name="name"
        placeholder="name"
      />
      <input type="number" value={info.age} onChange={handleType} name="age" placeholder="age" />
      <input
        type="text"
        value={info.gender}
        onChange={handleType}
        name="gender"
        placeholder="gender"
      />
      <input
        type="text"
        value={info.designation}
        onChange={handleType}
        name="designation"
        placeholder="designation"
      />
      <button onClick={HandleClick}>Send</button>
    </div>
  );
};

export default Form;
