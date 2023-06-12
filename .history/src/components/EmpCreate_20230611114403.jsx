import React from 'react'

const EmpCreate = () => {
    return (
        <>
            <form>
            <div className="mb-3">
                    <label for="exampleInputText1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputNumber1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputNumber1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> 
                <button  className="btn btn-warning">Back</button> 
            </form>
        </>
    )
}

export default EmpCreate
