import React from 'react';
import MainNavigation from '../MainNavigation';
import './index.scss';

const MainHeader = () => (
  <header className="main-header">
    <h1 className="main-header__title">Admin</h1>
    <MainNavigation />
  </header>
);

export default MainHeader;
