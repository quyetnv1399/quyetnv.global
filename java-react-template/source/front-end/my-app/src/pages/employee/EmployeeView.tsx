import React from 'react'

const EmployeeView = (props:any) => {
  return (
    <>
        <div className="container">
            <div className="ctn-header d-flex pt-4 mb-3">
                <button type="button" className="btn btn-success ms-auto" onClick={() => props.navigate("action")}>New Employee</button>
            </div>
            <div className="ctn-header d-flex">
                <div className="input-group mb-3 w-25">
                    <span className="input-group-text" id="basic-addon1" onClick={props.search}><i className="bi bi-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" onKeyUp={props.handleKeyUp} onChange={props.handleInputChange} aria-describedby="basic-addon1" />
                </div>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Birth Date</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.employee.map((emp:any, index:any) => {
                        return <>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{emp.firstName}</td>
                            <td>{emp.lastName}</td>
                            <td>{emp.gender ? "Male" : "Female"}</td>
                            <td>{emp.birthDate}</td>
                            <td>{emp.email}</td>
                            <td>{emp.contact}</td>
                            <td>{emp.address}</td>
                            <td>
                                <button type="button" className="btn btn-sm" data-bs-toggle="button" onClick={() => props.editEmployee(emp)}><i className="bi bi-pencil-square"></i></button>
                                <button type="button" className="btn btn-sm" data-bs-toggle="button" onClick={() => props.showConfirm(emp)} ><i className="bi bi-trash"></i></button>  
                            </td>
                        </tr>
                        </>
                    })}
                </tbody>
            </table>
            <div className="d-flex">
                <nav aria-label="..." className="ms-auto">
                    <ul className="pagination">
                        {props.getPrevious()}
                        {props.getPage()}
                        {props.getNext()}
                    </ul>
                </nav>
            </div>
            
        </div>
    </>
  )
}

export default EmployeeView
