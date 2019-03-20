import React from 'react';
import logo from '../../img/logo.png';
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Forecast</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
      <a className="msw-logo" href="http://magicseaweed.com">
        <img
          style={{ borderRadius: '5px' }}
          src="https://im-1-uk.msw.ms/msw_powered_by.png"
          alt="Magicseaweed Credit Badge"
        />
      </a>
    </nav>
  );
};

export default Sidebar;
