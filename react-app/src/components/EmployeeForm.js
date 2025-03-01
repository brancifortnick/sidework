import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitChoice } from '../store/employeeChoices';

const EmployeeForm = () => {
  const [option, setOption] = useState('');
  const [optionalText, setOptionalText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitChoice(option, optionalText));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="option">Choose an option:</label>
      <select
        id="option"
        name="option"
        value={option}
        onChange={(e) => setOption(e.target.value)}
        required
      >
        <option value="">Select an option</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
      </select>
      <br /><br />
      <label htmlFor="optionalText">Optional Comments:</label>
      <input
        type="text"
        id="optionalText"
        name="optionalText"
        value={optionalText}
        onChange={(e) => setOptionalText(e.target.value)}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;