import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';


export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Show </NavLink>
          </li>
          <li>
            <NavLink to="/main">Main </NavLink>
          </li>
          <li>
            <NavLink to="/home/page">Home Page </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
});
