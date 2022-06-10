import './Website.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './Navbar/Navbar'
import Footer from './Footer/Footer'

import Home from './Home/Home'

const tabs = [
  {
    label: 'Games',
    link: 'https://sjsugamedev.itch.io/',
    isExternal: true
  },
  {
    label: 'Events',
    link: '/events',
    isExternal: false
  },
  {
    label: 'Knowledge Base',
    link: 'https://sjsugamedev.com/knowledge-base/#/',
    isExternal: true
  }
]

function Website () {
  return (
    <div>

      <BrowserRouter>

        <Banner styles={{
          backgroundColor: '#0055a2',
          color: '#ffffff'
        }}
        >
          SUMMER 2022 WORKSHOP IS LIVE! <a href='https://sjsugamedev.com/summer2022.html'>Read more</a>
        </Banner>

        <Banner>
          Is something missing? <a href='https://sjsugamedev.com'>Visit the old site</a>
        </Banner>

        <Header tabs={tabs} />

        <Routes>
          <Route path='/' exact element={<Home />} />
          {/* <Route path='/games' exact element={<Games />} />
        <Route path='/events' exact element={<Events />} /> */}
        </Routes>

        <Footer tabs={tabs} />

      </BrowserRouter>

    </div>
  )
}

export default Website
