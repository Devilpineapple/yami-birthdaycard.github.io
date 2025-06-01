import logo from './logo-yami-cumple.png';
import './App.css';
import { Buffer } from 'buffer';
import ImageMapper from 'react-img-mapper';
import {MapArea} from 'react-img-mapper/dist/types'

const mainEventLocation = "TGEgTWFmaWEgc2Ugc2llbnRhIGEgbGEgbWVzYSwgQ2FycmVyIEZpZ3Vlcm9sYSwgMjQsIDE3MDAxIEdpcm9uYQ=="
const mainMapURL = 'aHR0cHM6Ly9tYXBzLmFwcC5nb28uZ2wvY3ZvdFdvNkFMaGVDY25URjg='
const mainPhoneNumber = "NjYzNDA2Nzgx"
const mainMessage = "Q29uZmlybW8gbGEgYXNpc3RlbmNpYQ=="

const App = () => {

  const onDateClicked = () => {
    const eventName = 'Graduación y Cumpleaños de Yami'
    const eventDates = '20250626T213000/20250627T000000'
    const eventDetails = ''
    const eventLocation = Buffer.from(mainEventLocation, 'base64').toString('ascii')
    
    window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${eventName}&dates=${eventDates}&details=${eventDetails}&location=${eventLocation}`)
  }
  
  const onLocationClicked = () => {
    const mapUrl = Buffer.from(mainMapURL, 'base64').toString('ascii')
    
    window.open(mapUrl)
  }

  const onConfirmationCliked = () => {
    const decodedPhoneNumber = Buffer.from(mainPhoneNumber, 'base64').toString('ascii')
    const decodedMessage = Buffer.from(mainMessage, 'base64').toString('ascii')

    window.open(`https://api.whatsapp.com/send/?phone=${decodedPhoneNumber}&text=${decodedMessage}`)
  }

  const render = () => {
    const areas: MapArea[] = [
      {
        id: "date",
        shape: "poly",
        coords: [
          75,365, 310,365, 310,305, 75,305 
        ],
        lineWidth: -1
      },
      {
        id: "location",
        shape: "poly",
        fillColor: "#eab54d4d",
        coords: [
          114,407, 250,407, 250,370, 114,370
        ],
        lineWidth: 0
      },
      {
        id: "confirmation",
        shape: "poly",
        fillColor: "#eab54d4d",
        coords: [
          147,433, 241,433, 241,413, 147,413
        ],
        lineWidth: 0
      }
    ]

    return <>
        <div className='test'>
          <ImageMapper
            src={logo}
            name='logo'
            // responsive={true}
            // natural={true}
            width={384}
            height={541}
            areas={areas}
            ref={null}
            onClick={(area) => onClickArea(area)}
          />
        </div>
    </>
  }

  const onClickArea = (area: MapArea) => {
    const { id } = area

    switch (id) {
      case 'date':
        onDateClicked();
        break;
      case 'location':
        onLocationClicked();
        break;
      case 'confirmation':
        onConfirmationCliked();
        break;
    }
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
