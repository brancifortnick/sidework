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
  const response = await fetch('/api/employee');
  if (response.ok) {
    const data = await response.json();
    dispatch(setEmployees(data));
  } else {
    console.log('its the get');
  }
};

export const submitEmployee = (userId, option, shiftWorked, optionalText) => async (dispatch) => {
  const response = await fetch('/api/employees/submit', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },

  });
  const data = await response.json();
  if (response.ok) {
    dispatch(addEmployee(data));
    return data;
  } else {
    console.log('its the post');
  }

};

// Initial State




// Reducer

  const initialState = {};
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_EMPLOYEES:
        let newState = {};
        action.payload.forEach((employee) => {
          newState[employee.id] = employee;
        });
        return newState;
      case ADD_EMPLOYEE:
        const addState = { ...state };
        addState[action.payload.id] = action.payload;
        return addState;
  
      default:
        return state;
    }
  }
