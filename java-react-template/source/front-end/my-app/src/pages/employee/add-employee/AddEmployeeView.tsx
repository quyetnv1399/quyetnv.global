import React from "react";

const AddEmployeeView = (props: any) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header d-flex">
            <b>New Employee</b>
        </div>
        <div className="card-body">
            <form onSubmit={props.formik.handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" name="firstName" onChange={props.formik.handleChange} value={props.formik.values.firstName} className="form-control"  placeholder="" />
                            {props.formik.touched.firstName && props.formik.errors.firstName && (<div className="required txt-rq">{props.formik.errors.firstName}</div>)}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" name="lastName" className="form-control" onChange={props.formik.handleChange} value={props.formik.values.lastName} placeholder="" />
                            {props.formik.touched.lastName && props.formik.errors.lastName && (<div className="required txt-rq">{props.formik.errors.lastName}</div>)}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Birth Date</label>
                            <input type="date" name="birthDate" className="form-control" onChange={props.formik.handleChange} value={props.formik.values.birthDate} placeholder="" />
                            {props.formik.touched.birthDate && props.formik.errors.birthDate && (<div className="required txt-rq">{props.formik.errors.birthDate}</div>)}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select className="form-select" aria-label="Default select example" name="gender" onChange={props.formik.handleChange} value={props.formik.values.gender}>
                                <option value="">Select</option>
                                <option value={0}>Male</option>
                                <option value={1}>Female</option>
                            </select>
                            {props.formik.touched.gender && props.formik.errors.gender && (<div className="required txt-rq">{props.formik.errors.gender}</div>)}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="email" className="form-control" name="address" onChange={props.formik.handleChange} value={props.formik.values.address} placeholder="" />
                            {props.formik.touched.address && props.formik.errors.address && (<div className="required txt-rq">{props.formik.errors.address}</div>)}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Contact</label>
                            <input type="email" name="contact" className="form-control" onChange={props.formik.handleChange} value={props.formik.values.contact} placeholder="" />
                            {props.formik.touched.contact && props.formik.errors.contact && (<div className="required txt-rq">{props.formik.errors.contact}</div>)}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" onChange={props.formik.handleChange} value={props.formik.values.email} placeholder="name@example.com" />
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div className="card-footer d-flex">
            <div className="ms-auto">
                <button type="button" className="btn btn-success" onClick={props.formik.handleSubmit}>Save</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeView;
