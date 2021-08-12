import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.scss';
import AppData from '../../components/AppData';
import logo from '../../assets/img/orbit-logos/logo.svg';

const nav = ()=> {

  const navSec = [];

  for (const el of AppData.navItems) {
    if(el.name !== 'home') {
      navSec.push(<li className="nav-item" key={el.id}><NavLink className="nav-link" to={'/' + el.path} activeClassName="is-active">{el.name}</NavLink></li>);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="navbar-logo"><Link className="nav-link" to={'/'}><img src={logo} alt="Orbit" /></Link></div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">{navSec}</ul>
      </div>
    </nav>
  );
}

export default nav;