import React, { useEffect } from 'react'

const Employee = () => {
    useEffect(()=>{
            fetch("http://localhost:8000/posts").then((respoonse)=> respoonse.json()).then((data)=>
            { console.log(data)
             return(data)}).catch((error)=>console.log("the error while fetching emp-data", error))
    },[])

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
                            <tr>
                            
                            </tr>
                            </tbody>
                </table>

            </div>
        </div>
      </div>
    </>
  )
}

export default Employee
