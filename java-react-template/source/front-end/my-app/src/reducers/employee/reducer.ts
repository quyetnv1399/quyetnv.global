import { ADD_EMPLOYEE, DELETE_EMPLOYEE, Employee, EmployeeActionTypes, GET_EMPLOYEES, UPDATE_EMPLOYEE } from "./types";

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [],
};

const employeeReducer = (state = initialState, action: EmployeeActionTypes): EmployeeState => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;