//! this is a store file for employee refactored



// const SET_EMPLOYEES = 'employees/SET_EMPLOYEES';
// const ADD_EMPLOYEE = 'employees/ADD_EMPLOYEE';
// const UPDATE_EMPLOYEE = 'employees/UPDATE_EMPLOYEE';

// const setEmployees = (employees) => ({
//   type: SET_EMPLOYEES,
//   payload: employees,
// });

// const addEmployee = (employee) => ({
//   type: ADD_EMPLOYEE,
//   payload: employee,
// });

// const updateEmployee = (employee) => ({
//   type: UPDATE_EMPLOYEE,
//   payload: employee,
// });

// export const fetchEmployees = () => async (dispatch) => {
//   const response = await fetch('/api/employee', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
  
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setEmployees(data));
//   }
// };

// export const submitEmployee = (id, option, optionalText) => async (dispatch) => {
//   const response = await fetch('/api/employee/submit', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ id, option, optionalText }),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     if (id) {
//       dispatch(updateEmployee(data));
//     } else {
//       dispatch(addEmployee(data));
//     }
//   } else {
//     console.error('Error submitting employee');
//   }
// };

// const initialState = { employees: [] };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_EMPLOYEES:
//       return { employees: action.payload };
//     case ADD_EMPLOYEE:
//       return { employees: [...state.employees, action.payload] };
//     case UPDATE_EMPLOYEE:
//       return {
//         employees: state.employees.map((employee) =>
//           employee.id === action.payload.id ? action.payload : employee
//         ),
//       };
//     default:
//       return state;
  