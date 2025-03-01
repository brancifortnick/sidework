const SET_CHOICES = 'employeeChoices/SET_CHOICES';
const ADD_CHOICE = 'employeeChoices/ADD_CHOICE';

const setChoices = (choices) => ({
  type: SET_CHOICES,
  payload: choices,
});

const addChoice = (choice) => ({
  type: ADD_CHOICE,
  payload: choice,
});

export const fetchChoices = () => async (dispatch) => {
  const response = await fetch('/api/choice', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setChoices(data));
  }
};

export const submitChoice = (option, optionalText) => async (dispatch) => {
  const response = await fetch('/api/choice/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ option, optionalText }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addChoice(data));
  } else {
    console.error('Error submitting choice');
  }
};

const initialState = { choices: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CHOICES:
      return { choices: action.payload };
    case ADD_CHOICE:
      return { choices: [...state.choices, action.payload] };
    default:
      return state;
    }
  }