import React, { useState } from 'react';

const EmployeeForm = () => {
    const [option, setOption] = useState('');
    const [optionalText, setOptionalText] = useState('');
    const [shiftWorked, setShiftWorked] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            option,
            optional_text: optionalText,
            shift_worked: shiftWorked
        };

        try {
            const response = await fetch('http://localhost:5000/api/employees/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Employee choice submitted successfully!');
            } else {
                alert(`Error: ${JSON.stringify(data.errors)}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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

            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { submitChoice } from '../store/employeeChoices';

// const EmployeeForm = () => {
//     const [option, setOption] = useState('');
//     const [optionalText, setOptionalText] = useState('');
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(submitChoice(option, optionalText));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="option">Choose an option:</label>
//             <select
//                 id="option"
//                 name="option"
//                 value={option}
//                 onChange={(e) => setOption(e.target.value)}
//                 required
//             >
//                 <option value="">Select an option</option>
//                 <option value="A">Option A</option>
//                 <option value="B">Option B</option>
//                 <option value="C">Option C</option>

//             </select>
//             <label for="shift_worked">Shift Worked:</label>
//             <input type="text" id="shift_worked" name="shift_worked" required/>
//                 <br /><br />
//                 <label htmlFor="optionalText">Optional Comments:</label>
//                 <input
//                     type="text"
//                     id="optionalText"
//                     name="optionalText"
//                     value={optionalText}
//                     onChange={(e) => setOptionalText(e.target.value)}
//                 />
//                 <br /><br />
//                 <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default EmployeeForm;