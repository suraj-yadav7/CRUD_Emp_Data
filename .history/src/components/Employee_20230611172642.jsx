import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Employee = () => {
    const [empData, setEmpData] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
            fetch("http://localhost:8000/employee").then((respoonse)=> respoonse.json()).then((data)=>
            { console.log(data)
             setEmpData(data)}).catch((error)=>console.log("the error while fetching emp-data", error))
    },[])

    const handleRemove=(id)=>{
        empData.filter((elem)=> elem.id !== id)
    }

  return (
    <>
      <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Employee Listing</h2>
        <div ><Link className='btn btn-success' to={"/employee/create"}>Add (+)</Link></div>
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
                                        <td>
                                            <a className='btn btn-success' onClick={()=> navigate(`employee/edit/${elem.id}`)}>Edit</a>
                                            <a className='btn btn-danger' onClick={()=>handleRemove(elem.id)}>Remove</a>
                                            <a className='btn btn-primary' onClick={()=>navigate(`/employee/details/${elem.id}`)}>Details</a>
                                             </td>
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
