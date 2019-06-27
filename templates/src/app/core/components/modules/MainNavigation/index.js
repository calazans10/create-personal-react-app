import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const MainNavigation = () => (
  <nav className="main-navigation">
    <ul className="main-navigation__list">
      <li className="main-navigation__item">
        <NavLink
          exact
          to="/"
          className="main-navigation__link"
          activeClassName="main-navigation__link--active"
        >
          Dashboard
        </NavLink>
      </li>
      <li className="main-navigation__item">
        <NavLink
          exact
          to="/users"
          className="main-navigation__link"
          activeClassName="main-navigation__link--active"
        >
          Usuários
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
