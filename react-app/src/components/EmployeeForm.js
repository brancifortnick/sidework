import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, submitEmployee } from '../store/employee';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function EmployeeForm() {
    const [option, setOption] = useState('');
    const [shiftWorked, setShiftWorked] = useState('');
    const [optionalText, setOptionalText] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const onSubmit = async (e) => {
        e.preventDefault();
       const formData = new FormData();
        formData.append('userId', user.id);
        formData.append('option', option);
        formData.append('shiftWorked', shiftWorked);
        formData.append('optionalText', optionalText);

        const data = await dispatch(submitEmployee(formData));
        if (data) {
            history.push('/');
        } else {
            console.log('Error submitting employee data');
        }
        // Reset form fields
        setOption('');
        setShiftWorked('');
        setOptionalText('');


    }

    useEffect(()=> {
        dispatch(fetchEmployees());
    },[dispatch])


    return (
        <div>
            <h2>Submit Employee</h2>
            <form
                onSubmit={onSubmit}
                style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}
            >
                <label htmlFor="option">Choose an option:</label>
                <select id="option" value={option} onChange={(e) => setOption(e.target.value)} required>
                    <option value="">Select an option</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                    <option value="C">Option C</option>
                </select>

                <label htmlFor="shiftWorked">Shift Worked:</label>
                <input type="text" id="shiftWorked" value={shiftWorked} onChange={(e) => setShiftWorked(e.target.value)} required />

                <label htmlFor="optionalText">Optional Comments:</label>
                <input type="text" id="optionalText" value={optionalText} onChange={(e) => setOptionalText(e.target.value)} />

                <button
                    type="submit"
                    style={{ marginTop: '10px', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default EmployeeForm;