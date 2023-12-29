'use client'
import { useState } from 'react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    type: '',
    number: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("type",formData.type)
    data.append("number",formData.number)
    data.append("file",formData.file)

    let result = await fetch("http://localhost:3000/api/upload",{
      method:"POST",
      body:data
    })
    result= await result.json()
    if(result.success)
    {
      alert("uploaded")
    }

    console.log(formData);
  };

  return (
    <div>
      <h1>Form with Three Inputs</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}