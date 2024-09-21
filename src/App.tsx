import React, { useEffect, useState } from 'react';
import logo from './luz_logo.png';
import location from './luz_location.png';
import date from './luz_date.png';
import menu from './luz_menu.png';
import './App.css';

enum PageState {
  FrontPage,
  FoodMenu
}

const App = () => {
  const [loading, setLoading] = useState(false)
  const [pageState, setPageState] = useState(PageState.FrontPage)

  useEffect(() => {
    if (loading) {
      console.log('loading start')
      setTimeout(() => {
        console.log('loading finished')
        setPageState(pageState === PageState.FrontPage ? PageState.FoodMenu : PageState.FrontPage)
        setLoading(false)
      }, 500) // 0.5s seconds
    }
  }, [loading])

  const onLocationClick = () => {
    window.open('https://maps.app.goo.gl/do54pdBSCzMvUmSA7')
  }

  const onDateClick = () => {
    window.open('https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWNlYmhraTVlOG4yOWVqMW5zZGoxODA1Z2UgbHVpc2FuZ2VsMTAwMThAbQ&tmsrc=luisangel10018%40gmail.com')
  }

  const onFoodMenuClick = () => {
    setLoading(true)
  }

  const renderFrontPage = () => {
    return <>
      <img src={logo} className="App-logo" alt="logo" />

      <div className='app-menu'>
        <img src={location} className='menu-options' alt="logo" onClick={onLocationClick} />
        <img src={date} className='menu-options' alt="logo" onClick={onDateClick} />

        <img src={menu} className='menu-options' alt="logo" onClick={onFoodMenuClick} />
      </div>
    </>
  }

  const renderFoodMenu = () => {
    return <>
      Menu goes here
      <img src={menu} className='menu-options' alt="logo" onClick={onFoodMenuClick} />
    </>
  }

  return (
    <div className="App">
      <div className="App-body">

        {pageState === PageState.FrontPage ? renderFrontPage() : renderFoodMenu()}

      </div>
    </div>
  );
}

export default App;
