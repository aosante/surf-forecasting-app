import React, { Component } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  padding: 15px 10px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  h1 {
    flex: 4;
    color: #fff;
  }
  div {
    flex: 0.5;
  }
  #sidebarCollapse {
    background: #7608a5;
    border: none;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2em;
    }
  }
`;

class Navbar extends Component {
  onToggleClick = () => {
    document.querySelector('#sidebar').classList.toggle('active');
  };

  render() {
    return (
      <Nav className="Navbar navbar-expand-lg navbar-light bg-dark">
        <h1>Costa Rica Forecast</h1>
        <div className="container-fluid d-flex flex-row-reverse">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-info"
            onClick={this.onToggleClick}
          >
            <svg
              className="svg-inline--fa fa-align-right fa-w-14"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="align-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
              width="1em"
              className="mr-1"
            >
              <path
                fill="currentColor"
                d="M160 84V44c0-8.837 7.163-16 16-16h256c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H176c-8.837 0-16-7.163-16-16zM16 228h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm160-128h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H176c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              />
            </svg>
            <span>Toggle</span>
          </button>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
