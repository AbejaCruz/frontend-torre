import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/torre.png';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className="header">
    <Link to="/" className="col-6 text-center"><img className="header__img" src={logo} alt="Torre.co" /></Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="https://starrgate.s3.amazonaws.com:443/users/638d4d3e8b2533ad92f4ef356b11f1de8d7d8121/profile_98tVnCO.jpg" alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li> <Link to="/profile" className="col-6 text-center">Cuenta</Link></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
