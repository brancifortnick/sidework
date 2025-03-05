import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitEmployee } from '../store/employee';
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
        const res = await dispatch(submitEmployee(user.id, option, shiftWorked, optionalText));
        if (res.ok) {
            console.log(res, "data coming from employeeform");
  
        } else {
            console.log('Error submitting employee');
        }
    };

    return (
        <>
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
        </>
    );
}

export default EmployeeForm;