import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EmpDetails = () => {
    const id = useParams()
    useEffect(()=>{
        fetch(`http://localhost:8000/employee/${id}`).then((response)=>{
            return response.json
        }).then((data)=> {
            console.log(data)
        }).catch(error =>console.log("Error while fetching employee details",error))
    })

  return (
    <div className='container'>
        <div className='card'>
            <div className='card-body'>
                <h3>Employee Name : {}</h3>
                <h3>Employee Email : {}</h3>
                <h3>Employee Phone : {}</h3>
            </div>
        </div>
    </div>
  )
}

export default EmpDetails
