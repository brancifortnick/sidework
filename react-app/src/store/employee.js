const SET_EMPLOYEES = 'employees/SET_EMPLOYEES';
const ADD_EMPLOYEE = 'employees/ADD_EMPLOYEE';
const UPDATE_EMPLOYEE = 'employees/UPDATE_EMPLOYEE';

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

export const fetchEmployees = () => async (dispatch) => {
  const response = await fetch('/api/employees', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setEmployees(data));
  }
};

export const submitEmployee = (id, option, shiftWorked, optionalText) => async (dispatch) => {
  const response = await fetch('/api/employees/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, option, shift_worked: shiftWorked, optional_text: optionalText }),
  });

  if (response.ok) {
    const data = await response.json();
    if (id) {
      dispatch(updateEmployee(data));
    } else {
      dispatch(addEmployee(data));
    }
  } else {
    console.error('Error submitting employee');
  }
};

const initialState = { employees: [] };

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

// const SET_CHOICES = 'employeeChoices/SET_CHOICES';
// const ADD_CHOICE = 'employeeChoices/ADD_CHOICE';

// const setChoices = (choices) => ({
//   type: SET_CHOICES,
//   payload: choices,
// });

// const addChoice = (choice) => ({
//   type: ADD_CHOICE,
//   payload: choice,
// });

// export const fetchChoices = () => async (dispatch) => {
//   const response = await fetch('/api/choice', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
  
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(setChoices(data));
//   }
// };

// export const submitChoice = (option, optionalText) => async (dispatch) => {
//   const response = await fetch('/api/choice/submit', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ option, optionalText }),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     dispatch(addChoice(data));
//   } else {
//     console.error('Error submitting choice');
//   }
// };

// const initialState = { choices: [] };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_CHOICES:
//       return { choices: action.payload };
//     case ADD_CHOICE:
//       return { choices: [...state.choices, action.payload] };
//     default:
//       return state;
//     }
//   }