import React, { useState } from 'react'

const EmpCreate = () => {
    const [empName, setEmpName] = useState("the employee na,e")
    const [empemail, setEmpemail] = useState("The email")
    const [empPhone, setEmpPhone] = useState("the num")
    return (
        <>
        <div className='card'>
            <div className='card-body'>
            <form>
            <div className="mb-3">
                    <label for="exampleInputText1" className="form-label" value={empName} > Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" value={empemail}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputNumber1" className="form-label" value={empPhone}>Phone</label>
                    <input type="number" className="form-control" id="exampleInputNumber1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> 
                <button  className="btn btn-warning">Back</button> 
            </form>
            </div>
        </div>
        </>
    )
}

export default EmpCreate
