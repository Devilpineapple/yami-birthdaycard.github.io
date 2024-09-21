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
  const [loading, setLoading] = useState(true)
  const [pageState, setPageState] = useState(PageState.FoodMenu)

  useEffect(() => {
    if (loading) {
      console.log('loading start')
      setTimeout(() => {
        console.log('loading finished')
        setPageState(pageState === PageState.FrontPage ? PageState.FoodMenu : PageState.FrontPage)
        setLoading(false)
      }, 400) // 0.4s seconds
    }
  }, [loading])

  const onLocationClick = () => {
    window.open('https://maps.app.goo.gl/do54pdBSCzMvUmSA7')
  }

  const onDateClick = () => {
    // window.open('https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmxmMGRiNjkzZDgyMmk1NHViZ2kxcjFnOHEgbHVpc2FuZ2VsMTAwMThAbQ&tmsrc=luisangel10018%40gmail.com')
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241019/20241020&text=Fiesta Lucy')
  }

  const onFoodMenuClick = () => {
    setLoading(true)
  }

  const render = () => {
    if (!loading) {
      return pageState === PageState.FrontPage ? renderFrontPage() : renderFoodMenu()
    } else {
      return <div></div>
    }
  }

  const renderFrontPage = () => {
    return <>
      <img src={logo} className="App-logo" alt="logo" />

      <div className='app-menu'>
        <img src={location} className='menu-option menu-location' alt="logo" onClick={onLocationClick} />
        <img src={date} className='menu-option menu-date' alt="logo" onClick={onDateClick} />
        <img src={menu} className='menu-option menu-menu' alt="logo" onClick={onFoodMenuClick} />
      </div>
    </>
  }

  const renderFoodMenu = () => {
    return <>
      Menu goes here
      <img src={menu} className='menu-option' alt="logo" onClick={onFoodMenuClick} />
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
