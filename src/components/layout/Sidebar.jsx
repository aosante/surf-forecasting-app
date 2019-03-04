import React, { Component } from 'react';
import logo from './logo.png';

const Sidebar = _ => {
  return (
    <nav id="sidebar" className="bg-dark">
      <div className="sidebar-header" style={{ textAlign: 'center' }}>
        <img
          style={{
            width: '80%',
            height: '7em',
            margin: '0'
          }}
          src={logo}
          alt=""
        />
      </div>

      <ul className="list-unstyled components">
        <p
          style={{
            color: '#2fbc1a',
            fontFamily: 'Shadows Into Light',
            fontSize: '1.7em',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          Know Before You Go
        </p>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
            Pages
          </a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
