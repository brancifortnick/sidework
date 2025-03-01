const GET_EMPLOYEES = "employee/GET_EMPLOYEES";
const GET_ONE = "employee/GET_ONE";
const ADD_EMPLOYEE = "employee/ADD_MUSICIAN";
const DELETE_EMPLOYEE = "employee/DELETE_MUSICIAN";



const getAllStaff = (employees) => ({
    type: GET_EMPLOYEES,
    payload: employees,
})