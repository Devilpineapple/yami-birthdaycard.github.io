import React from 'react';
// import logo from './logo.svg';
import logo from './luz_logo.png';
import location from './luz_location.png';
import date from './luz_date.png';
import menu from './luz_menu.png';
import './App.css';
// import { AddToCalendarButton } from 'add-to-calendar-button-react';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />

        <div className='app-menu'>
          <img src={location} className='menu-options' alt="logo" />
          <img src={date} className='menu-options' alt="logo" />
          <img src={menu} className='menu-options' alt="logo" />
        </div>
        
        {/* <div className='App-div'>
          <div className="div-link location" onClick={() => {
            window.open('https://maps.app.goo.gl/do54pdBSCzMvUmSA7')
          }}>

          </div>

          <div className='div-link date'>
            
          </div>
          <div className='div-link menu'>
          </div>
        </div> */}
        {/* <a */}
          {/* className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React */}
        {/* </a> */}
        {/* <AddToCalendarButton
              name="Test"
              startDate="2024-10-19"
              options={['Google']}
              timeZone="Spain"
              /> */}
      </div>
    </div>
  );
}

export default App;
