import React from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import { useDispatch, useSelector } from "react-redux";
import { demoLogin } from "../../store/session";


const demoFunction = async (e) => {
  e.preventDefault();
  dispatch(demoLogin());
  history.push("/");
};


const NavBar = () => {
  return (
    <nav>
        {!user ? (
        <div>
          <button id="demo-button" onClick={demoFunction}>
            Demo
          </button>
        </div>
      ) : null}
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      
      </ul>
    </nav>
  );
}

export default NavBar;
