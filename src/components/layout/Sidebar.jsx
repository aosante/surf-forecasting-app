import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

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
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Pages</Link>
        </li>
        <li>
          <Link to="/">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
