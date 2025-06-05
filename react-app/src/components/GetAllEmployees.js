import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {useState,useHistory} from 'react-redux';
import { fetchEmployees } from '../store/employee';


const GetAllEmployees = () => {

const [employees, setEmployees] = React.useState([]);



const dispatch = useDispatch();
const history = useHistory();


    return (
        <div>
            <h4>Employee Information:</h4>


        </div>
    )
}