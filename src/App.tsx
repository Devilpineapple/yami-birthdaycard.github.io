import React from 'react';
// import logo from './logo.svg';
import logo from './birthday_empty_v2.png';
import './App.css';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div className='App-div'>
          <div className="div-link location" onClick={() => {
            window.open('https://maps.app.goo.gl/do54pdBSCzMvUmSA7')
          }}>

          </div>
          <div className='div-link date'>
            
          </div>
          <div className='div-link menu'>
          </div>
        </div>
        {/* <a */}
          {/* className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React */}
        {/* </a> */}
        <AddToCalendarButton
              name="Test"
              startDate="2024-10-19"
              options={['Google']}
              timeZone="Spain"
              />
      </div>
    </div>
  );
}

export default App;
