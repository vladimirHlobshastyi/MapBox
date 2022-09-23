import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import uaLogo from './png/ua1.png';

const Navbar = () => {
  return (
    <div className={style.NavbarContainer}>
      <div className={style.NavbarLogo}>
        <img src={uaLogo} alt="logo" />
      </div>
      <div className={style.navElContainer}>
        <div className={style.navEl}>
          <NavLink to={'/'}>Карта</NavLink>
        </div>
        <div className={style.navEl}>
          <NavLink to={'/statisctic'}>Втрати ворога</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
