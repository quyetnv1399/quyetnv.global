import axios from "axios";
import { Employee } from "../reducers/employee/types";

const API_URL:any = process.env.REACT_APP_EMPLOYEE_API_URL_DEV

export class EmployeesApi {

  protected static API_URL:any = process.env.REACT_APP_EMPLOYEE_API_URL_DEV

  public static getAllEmp<T = any>(page:number = 0, pageSize:number = 10, params?:any){
    return axios.get<T>(`${this.API_URL}/employee/${page}/${pageSize}`, params);
  } 

  public static getOne<T = any>(id:String){
    return axios.get<T>(`${this.API_URL}/employee/${id}`);
  } 

  public static add<T = any>(data:any){
    return axios.post<T>(`${this.API_URL}/employee`, data);
  }

  public static update<T = any>(id:String, data:any){
    return axios.put<T>(`${this.API_URL}/employee/${id}`, data);
  } 

  public static delete<T = any>(id:String){
    return axios.delete<T>(`${this.API_URL}/employee/${id}`);
  } 
  
}

const getAll = async (): Promise<Employee[]> => {
  const response = await axios.get<Employee[]>(`${API_URL}/employee`);
  return response.data;
};

export const EmployeeApi = {
  getAll,
}
