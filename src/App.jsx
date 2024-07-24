import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Layout from './components/Layout'
import DestinationsLayout from './components/DestinationsLayout' 
import CrewLayout from './components/CrewLayout'
import TechnologyLayout from './components/TechnologyLayout'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Destination from './pages/Destinations'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import * as images from './components/Images'
import { AnimatePresence } from 'framer-motion'
import Data from '../data.json'

function App() {

  const [windowSize, setWindowSize] = React.useState(null)
  const location = useLocation()
  let path = 'home'

  if (location.pathname.includes("destinations")) {
    path = 'destination'
  }
  if (location.pathname.includes("crew")) {
    path = 'crew'
  }
  if (location.pathname.includes("technology")) {
    path = 'technology'
  }
  if (location.key === "default") {
    path = 'not-found'
  }

  React.useEffect(() => {  
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (windowSize === null) {
      setWindowSize(window.innerWidth)
    }
    return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])

  return (
        <AnimatePresence mode='wait'>
          <Routes location={location} key={path}>
        <Route path='/' element={<Layout windowSize={windowSize} />}>
            <Route index element={<Homepage />} />        
            <Route path='destinations' element={<DestinationsLayout />}> 
              <Route path='moon' element={<Destination data={Data.destinations[0]} img={images.moon} />} />
              <Route path='mars' element={<Destination data={Data.destinations[1]} img={ images.mars} />} />
              <Route path='europa' element={<Destination data={Data.destinations[2]} img={images.europa} />} />
              <Route path='titan' element={<Destination data={Data.destinations[3]} img={images.titan} />} />
            </Route>

            <Route path='crew' element={<CrewLayout />}>
              <Route path="douglas-hurley" element={<Crew data={Data.crew[0]} img={images.douglas}/>} />
              <Route path="mark-shuttleworth" element={<Crew data={Data.crew[1]} img={images.mark} />} />
              <Route path="victor-glover" element={<Crew data={Data.crew[2]} img={images.victor}/>} />
              <Route path="anousheh-ansari" element={<Crew data={Data.crew[3]} img={images.anousheh} />} />
            </Route>
            
            <Route path='technology' element={<TechnologyLayout />}>
              <Route path="launch-vehicle" element={<Technology data={Data.technology[0]} img={windowSize < 768 ? images.vehicleMobile : images.vehicleDesktop} />}/>
              <Route path="spaceport" element={<Technology data={Data.technology[1]} img={windowSize < 768 ? images.spaceportMobile : images.spaceportDesktop}/>}/>
              <Route path="space-capsule" element={<Technology data={Data.technology[2]} img={windowSize < 768 ? images.capsuleMobile : images.capsuleDesktop}/>}/>
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
  )
}

export default App
