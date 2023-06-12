import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpDetails = () => {
    const [empData, setEmpData] = useState()
    const empId = useParams()
    let id = parseInt(empId)
    console.log("the id", id)
    useEffect(()=>{
     fetch(`http://localhost:8000/employee/${id}`).then((response)=>{
            return response.json()
        }).then((data)=> {
            console.log("the fetch data", data)
            setEmpData(data)
        }).catch(error =>console.log("Error while fetching employee details",error))
    },[])
console.log("empdata", empData)
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-body'>
                {/* {
                    empData && empData.map((elem)=>(
                        <div className='body-items'>     
                        <h3>Employee Name : {elem.name}</h3>
                        <h3>Employee Email : {elem.email}</h3>
                        <h3>Employee Phone : {elem.phone}</h3>
                        </div>
                    ))
                } */}
            </div>
        </div>
    </div>
  )
}

export default EmpDetails
