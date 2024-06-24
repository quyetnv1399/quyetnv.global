export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  gender: Boolean;
  birthDate: Date;
  email: string;
  contact: number;
  address: string;
  imageId: string;
}

export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";

interface GetEmployeeAction {
  type: typeof GET_EMPLOYEES;
  payload: Employee[];
}

interface AddEmployeeAction {
  type: typeof ADD_EMPLOYEE;
  payload: Employee;
}

interface UpdateEmployeeAction {
  type: typeof UPDATE_EMPLOYEE;
  payload: Employee;
}

interface DeleteEmployeeAction {
  type: typeof DELETE_EMPLOYEE;
  payload: { id: string };
}

export type EmployeeActionTypes = GetEmployeeAction | AddEmployeeAction | UpdateEmployeeAction | DeleteEmployeeAction;
