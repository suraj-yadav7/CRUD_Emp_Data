import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmpCreate = () => {
    const [empName, setEmpName] = useState()
    const [empEmail, setEmpEmail] = useState()
    const [empPhone, setEmpPhone] = useState()
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        let name= empName
        let email= empEmail
        let phone= empPhone
        const empObj = {name,email,phone}
        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{
            "content-type":"application/json"},
            body:JSON.stringify(empObj)
        }).then((response)=>{
            response.json()
        }).then((data)=> console.log("the repsonse data", data)).catch((error)=> console.log("Error while posting data", error))
    }
    return (
        <>
        <div className='card'>
            <div className='card-body'>
            <form>
            <div className="mb-3">
                    <label for="exampleInputText1" className="form-label" value={empName} > Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" onChange={(e)=>setEmpName(e.target.value)} aria-describedby="emailHelp"/>
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

export default EmpCreate
