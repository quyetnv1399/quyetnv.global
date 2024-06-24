import { Dispatch } from "redux";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, Employee, EmployeeActionTypes, GET_EMPLOYEES, UPDATE_EMPLOYEE } from "./types";
import { EmployeeApi } from "../../api/employeeApi";

export const getEmployees = () => async (dispatch: Dispatch<EmployeeActionTypes>) => {
  try {
    const employees = await EmployeeApi.getAll();
    dispatch({ type: GET_EMPLOYEES, payload: employees });
  } catch (error) {
    console.error('There was an error getting the employees:', error);
  }
};

export const addEmployee = (employee: Employee): EmployeeActionTypes => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const updateEmployee = (employee: Employee): EmployeeActionTypes => ({
  type: UPDATE_EMPLOYEE,
  payload: employee,
});

export const deleteEmployee = (id: string): EmployeeActionTypes => ({
  type: DELETE_EMPLOYEE,
  payload: { id },
});
