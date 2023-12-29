import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import uaLogo from './png/ua1.png';

const Navbar = () => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? style.active : style.noActive;
  };
  return (
    <div className={style.NavbarContainer}>
      <div className={style.NavbarLogo}>
        <img src={uaLogo} alt="logo" />
      </div>
      <div className={style.navElContainer}>
        <div className={style.navEl}>
          <NavLink to={'/map'} className={isActive}>
            Карта
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
