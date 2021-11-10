import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import './index.css';

const Init = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/pages/popup/init/index.tsx</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React!
      </a>
      <Link to='/home'>home</Link>
    </header>
  </div>
);

export default Init;
