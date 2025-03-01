
const SET_CHOICE = 'session/SET_CHOICE';
const REMOVE_CHOICE = 'session/REMOVE_CHOICE';

const setChoice = (choice) => ({
    type: SET_CHOICE,
    payload: choice
});

const removeChoice = () => ({
    type: REMOVE_CHOICE
});

const initialState = { choice: null };

export const fetchChoice = () => async (dispatch) => {
    const response = await fetch('/api/choice/', {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(setChoice(data));
    }
}

export const submitChoice = (option, optional_text) => async (dispatch) => {
    const response = await fetch('/api/choice/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option, optional_text })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(setChoice(data));
    } else {
        console.error('Error submitting choice');
    }
}

export const clearChoice = () => (dispatch) => {
    dispatch(removeChoice());
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CHOICE:
            return { choice: action.payload };
        case REMOVE_CHOICE:
            return { choice: null };
        default:
            return state;
    }
}