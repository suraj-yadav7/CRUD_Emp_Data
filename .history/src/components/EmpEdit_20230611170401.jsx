import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpEdit = () => {
  const [empName, setEmpName]=useState()
  const [empEmail, setEmpEmail]=useState()
  const [empPhone, setEmpPhone]=useState()
  console.log("the emp", empName, empEmail, empPhone)
  const empID = useParams()
  const id = parseInt(empID.id)

  const handleSubmit=()=>{}
  //   let name=empEmail
  //   let email=empEmail
  //   let phone=empPhone
  //   let empObj = {name,email,phone}
  //   fetch(`http://localhost:8000/employee/${id}`,{
  //     method:"UPDATE",
  //     headers:{
  //       "content-type":"application/json"
  //     },
  //     body:JSON.stringify(empObj)
  //   }).then((response)=>{
  //     return response.json
  //   }).then((data)=>{
  //     console.log("The handle submit data", data)
  //     return data
  //   }).catch((error)=> console.log("Error while handling fetch", error))
  // }

  useEffect(()=>{
    fetch(`http://localhost:8000/employee/${id}`,{
      method:"GET",
      headers:{
        "content-type":"application/json"
      },
    }).then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log("the response data in edit", data)
      setEmpName(data.name)
      setEmpEmail(data.email)
      setEmpPhone(data.phone)
      return data
    }).catch((error)=> console.log("there is error while fetching data", error))
  },[])


  return (
    <>
      <div className='container'>
        <div className='card'>
          <h3>Update Employee Data</h3>
          <form>
               <div className="mb-3">
                    <label for="exampleInputText1" className="form-label" value={empName} > Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" onChange={(e)=setEmpName(e.target.value)}  aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" value={empEmail}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>setEmpEmail(e.target.value)} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputNumber1" className="form-label" value={empPhone}>Phone</label>
                    <input type="number" className="form-control" onChange={(e)=>setEmpPhone(e.target.value)} id="exampleInputNumber1"/>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button> 
                <button  className="btn btn-warning" onClick={()=>navigate("/")}>Back</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EmpEdit
