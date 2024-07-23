import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import Data from '../data.json'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
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
            <Route path="launch-vehicle" element={<Technology />}/>
            <Route path="spaceport" element={<Technology />}/>
            <Route path="space-capsule" element={<Technology />}/>
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
