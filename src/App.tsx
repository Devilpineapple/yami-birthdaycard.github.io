import React, { useEffect, useState } from 'react';
import logo from './logo-yami-cumple.png';
import birthday_menu from './birthday_menu_v3.png';
import back_arrow from './back_arrow.png';
import location from './luz_location.png';
import date from './luz_date.png';
import menu from './luz_menu.png';
import './App.css';
import { Buffer } from 'buffer';

const mainEmoji = encodeURIComponent('🍍')
const mainPhoneNumber = "NjI3MTk4ODg5"
const mainMessage = "Q29uZmlybW8gbGEgYXNpc3RlbmNpYSYjMTI3ODIxOw==" // Confirmo la asistencia&#127821;

const App = () => {

  const onLocationClick = () => {
    window.open('https://maps.app.goo.gl/do54pdBSCzMvUmSA7')
  }

  const onDateClick = () => {
    // window.open('https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmxmMGRiNjkzZDgyMmk1NHViZ2kxcjFnOHEgbHVpc2FuZ2VsMTAwMThAbQ&tmsrc=luisangel10018%40gmail.com')
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241019/20241020&text=Fiesta cumple Luz')
  }

  const render = () => {
    return renderFrontPage()
  }

  const renderFrontPage = () => {
    const decodedPhoneNumber = Buffer.from(mainPhoneNumber, 'base64').toString('ascii')
    const decodedMessage = Buffer.from(mainMessage, 'base64').toString('ascii') + mainEmoji
    
    return <>
      <img src={logo} className="App-logo" alt="logo" />

      <div className='bday-date'></div>
      <div className='bday-location'></div>
      <div className='bday-confirmation'></div>

      {/* <div className='app-menu'> */}
        {/* <div className='test-ground'></div> */}
        {/* <img src={location} className='menu-option menu-location' alt="logo" onClick={onLocationClick} />
        <img src={date} className='menu-option menu-date' alt="logo" onClick={onDateClick} />
        <img src={menu} className='menu-option menu-menu' alt="logo" onClick={onFoodMenuClick} /> */}
      {/* </div> */}
      {/* <a href="https://wa.me/664806624?text=Confirmo%20la%20asistencia&#127821;">Click me</a> */}
      <a href={`https://api.whatsapp.com/send/?phone=${decodedPhoneNumber}&text=${decodedMessage}`}>Click me x2</a>
      {/* <a href="https://api.whatsapp.com/send/?phone=664806624&text=Confirmo%20la%20asistencia&#127821;">Click me x2</a> */}
    </>
  }

  return (
    <div className="App">
      <div className="App-body">
        {render()}
      </div>
    </div>
  );
}

export default App;
