import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpDetails = () => {
    const [empData, setEmpData] = useState()
    const empId = useParams()
    let id = parseInt(empId.id)

    useEffect(()=>{
     fetch(`http://localhost:8000/employee/${id}`).then((response)=>{
            return response.json()
        }).then((data)=> {
            console.log("the fetch data", data)
            setEmpData(data)
        }).catch(error =>console.log("Error while fetching employee details",error))
    },[])
    console.log("array empdata", empData)
// console.log("empdata", empData[0].name)
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-body'>
                {
                    empData &&
                        <div className='body-items' key={empData.id}>     
                        <h4>Employee Name : {empData.name}</h4>
                        <h4>Employee Email : {empData.email}</h4>
                        <h4>Employee Phone : {empData.phone}</h4>
                        </div>
                    
                }
            </div>
        </div>
    </div>
  )
}

export default EmpDetails
