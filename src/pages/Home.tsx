import React from 'react';
import Button from '../components/UI/Button';
import logo from '../media/vector/logo.svg';
import '../css/App.css';

const Home = () => {
    return (
        <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />
        </div>
    )
};

export default Home;