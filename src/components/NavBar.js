import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

function NavBar({ loggedIn, signOut, email }) {
  return (
    <nav className="navbar">
      {loggedIn ?
        <>
          <p className="navbar__text">{email}</p>
          <button className="navbar__button navbar__link" type="button" onClick={signOut}>Sign out</button>
        </> :
        <ul className="navbar__nav"> 
          <Routes>
            <Route path="/" element={<li><NavLink to="/sign-up" className="navbar__link">Sign up</NavLink></li>} />
            <Route path='/sign-up' element={<li><NavLink to="/sign-in" className="navbar__link">Sign in</NavLink></li>} />
            <Route path='/sign-in' element={<li><NavLink to="/sign-up" className="navbar__link">Sign up</NavLink></li>} />
          </Routes>
        </ul>
      }
    </nav>
  );
}

export default NavBar;