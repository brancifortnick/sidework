const SET_EMPLOYEES = "employees/SET_EMPLOYEES";
const ADD_EMPLOYEE = "employees/ADD_EMPLOYEE";
const UPDATE_EMPLOYEE = "employees/UPDATE_EMPLOYEE";

// Action Creators
const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  payload: employees,
});

const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

const updateEmployee = (employee) => ({
  type: UPDATE_EMPLOYEE,
  payload: employee,
});

// Async Thunks
export const fetchEmployees = () => async (dispatch) => {

  const response = await fetch('/api/employees')
  if (response.ok) {
    const data = await response.json();
    dispatch(setEmployees(data));
  } else {
    console.log('its the get')
  }
};

// export const submitEmployee = (userId, option, shiftWorked, optionalText) => async (dispatch) => {

//   const response = await fetch('/api/employees/submit', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ option, shift_worked: shiftWorked, optional_text: optionalText, user_id: userId }),
//   }


// Initial State
const initialState = {};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state, employees: action.payload };
    case ADD_EMPLOYEE:
      return { ...state, employees: [...state.employees, action.payload] };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee.id === action.payload.id ? action.payload : employee
        ),
      };
    default:
      return state;
  }
}