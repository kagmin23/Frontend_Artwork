import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Na = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/page-m">My Collection</NavLink>
        </li>
        <li>
          <NavLink to="/insight">Insight</NavLink>
        </li>
        <li>
          <NavLink to="/saves">Saves</NavLink>
        </li>
        <li>
          <NavLink to="/follow">Follow</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Na;
