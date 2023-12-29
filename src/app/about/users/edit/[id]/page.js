"use client";
import React, { useEffect, useState } from "react";

const Form = ({ params }) => {
  const [userArray, setUserArray] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const fetchData = await fetch(
        `http://localhost:3000/api/users/${params.id}`
      );
      const data = await fetchData.json();
      setUserArray(data.result);
    };
    getUsers();
  }, []);


  const handleType = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
      setUserArray((value) => {
      return {
        ...value,
        [inputName]: inputValue,
      };
    });
  };

  const HandleClick = async () => {
    try {
      console.log(userArray);
      const fetchResult = await fetch(`http://localhost:3000/api/users/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(userArray),
        headers: { "Content-Type": "application/json" },
      });
      if (!fetchResult.ok) {
        throw new Error(`HTTP error! Status: ${fetchResult.status}`);
      }
      console.log(fetchResult);
      const data = await fetchResult.json();
      if (data.success) {
        alert("successed");
      }
      console.log(data);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        value={userArray && userArray.name}
        onChange={handleType}
        name="name"
        placeholder="name"
        style={{ height: "50px" }}
      />
      <input
        type="number"
        value={userArray && userArray.age}
        onChange={handleType}
        name="age"
        placeholder="age"
        style={{ height: "50px" }}
      />
      <input
        type="text"
        value={userArray && userArray.gender}
        onChange={handleType}
        name="gender"
        placeholder="gender"
        style={{ height: "50px" }}
      />
      <input
        type="text"
        value={userArray && userArray.designation}
        onChange={handleType}
        name="designation"
        placeholder="designation"
        style={{ height: "50px" }}
      />
      <button
        onClick={HandleClick}
        style={{ height: "50px", fontWeight: "bold" }}
      >
        Edit
      </button>
    </div>
  );
};

export default Form;
