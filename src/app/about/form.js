"use client";
import React, { useState } from "react";

const Form = () => {
  const [info, setInfo] = useState({
    fname: "",
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
    setCurrent(() => {
      return {
        ...info,
      };
    });

    try {
      const fetchResult = await fetch("http://localhost:3000/api/about", {
        method: "POST",
        body: JSON.stringify(info),
        headers: { "Content-Type": "application/json" },
      });
      if (!fetchResult.ok) {
        throw new Error(`HTTP error! Status: ${fetchResult.status}`);
      }
      const data = await fetchResult.json();
      alert("successed")
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={info.fname}
        onChange={handleType}
        name="fname"
      />
      <input type="number" value={info.age} onChange={handleType} name="age" />
      <input
        type="text"
        value={info.gender}
        onChange={handleType}
        name="gender"
      />
      <input
        type="text"
        value={info.designation}
        onChange={handleType}
        name="designation"
      />
      <button onClick={HandleClick}>Send</button>
    </div>
  );
};

export default Form;
