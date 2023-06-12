import React, { useEffect, useState } from 'react'

const Employee = () => {
    const [empData, setEmpData] = useState()
    useEffect(()=>{
            fetch("http://localhost:8000/employee").then((respoonse)=> respoonse.json()).then((data)=>
            { console.log(data)
             setEmpData(data)}).catch((error)=>console.log("the error while fetching emp-data", error))
    },[])
    console.log("usestate", empData)
  return (
    <>
      <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Employee Listing</h2>
            </div>
            <div className='card-body'>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                        <tbody>
                                {
                                    empData && empData.map((elem)=>(
                                        <tr key = {elem.id}>
                                        <td>{elem.id} </td>
                                        <td>{elem.name} </td>
                                        <td>{elem.email} </td>
                                        <td>{elem.phone} </td>
                                        <td>{elem.action} </td>
                                        </tr>
                                    ))

                                }
                            
                            </tbody>
                </table>

            </div>
        </div>
      </div>
    </>
  )
}

export default Employee
