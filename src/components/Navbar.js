import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { ToogleSidebar, DropdownAction } from '../redux/action/userAction';

function Navbar() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(ToogleSidebar(true))
    }
    return (
      <>
        <div className="navbar-wrapper">
          <ul>
            <li onClick={handleClick}>
              <i className="fas fa-hamburger"></i>
              <span className="ml-2 text-white font-weight-bold">Avana</span>
            </li>
          </ul>
        </div>
      </>
    );
}

export default connect()(Navbar)
