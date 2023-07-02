import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar({ loggedIn, signOut, email }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      {loggedIn ?
        <>
          <p className="navbar__text">{email}</p>
          <button className="navbar__button navbar__link" type="button" onClick={signOut}>Выйти</button>
        </> :
        <ul className="navbar__nav"> 
          {location.pathname !== "/sign-in" && <li><NavLink to="sign-in" className="navbar__link">Войти</NavLink></li>}
          {location.pathname !== "/sign-up" && <li><NavLink to="sign-up" className="navbar__link">Регистрация</NavLink></li>}
        </ul>
      }
    </nav>
  );
}

export default NavBar;