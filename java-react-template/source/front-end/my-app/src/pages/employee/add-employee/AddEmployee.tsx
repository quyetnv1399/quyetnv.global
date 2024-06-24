import React, { useEffect, useState } from "react";
import AddEmployeeView from "./AddEmployeeView";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { EmployeesApi } from "../../../api/employeeApi";
import { useParams } from "react-router-dom";

const AddEmployee = () => {

  const [loading, setLoading] = useState(false);

  const [initial, setInitial] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    birthDate: '',
    contact: '',
    address: '',
    imageId: null,
  })
  
  let { id }:any = useParams();

  const employeeGroupSchema = Yup.object().shape({
    firstName: Yup.string().required(`Feild is required`),
    lastName: Yup.string().required(`Feild is required`),
    birthDate: Yup.string().required(`Feild is required`),
    gender: Yup.string().required(`Feild is required`),
    contact: Yup.string().required(`Feild is required`),
    address: Yup.string().required(`Feild is required`),
  });

  const formik = useFormik({
    initialValues: initial,
    validationSchema: employeeGroupSchema,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {

        if(id){
          await EmployeesApi.update(id, {
            ...values,
            gender: values.gender === '0' ? false : true
          });
        }else{
          await EmployeesApi.add({
            ...values,
            gender: values.gender === '0' ? false : true
          });
        }

        alert("Success");
        if(!id){
          resetForm();
        }
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    },
  });

  const getEmployeeById = async () => {
    if(id){
      try {
        const res = await EmployeesApi.getOne(id);
        console.log(res.data)
        setInitial({
          ...res.data,
          gender: res.data.gender ? '1' : '0'
        });
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    }
  }

  useEffect(() => {
    getEmployeeById();
  }, [id]);

  return AddEmployeeView({formik});
};

export default AddEmployee;
