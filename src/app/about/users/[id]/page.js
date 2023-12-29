import React from 'react'


export async function fetchUser(id){
    const fetchdata = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await fetchdata.json();
    console.log(data.result)
    return data.result;
}

const Page =async ({params}) => {

    const dataUser = await fetchUser(params.id)

  return (
      dataUser && <div>
          <h2>Name: {dataUser.name}</h2>
          <h2>Age: {dataUser.age}</h2>
          <h2>Gender: {dataUser.gender}</h2>
          <h2>Designation: {dataUser.designation}</h2>
      </div>
  )
}

export default Page