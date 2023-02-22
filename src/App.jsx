

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedRoutes from './Components/AnimatedRoutes'

import  { DataContextProvider } from './Context/DataContext'


import "./Styles/App.css"


function App() {

  return (
  
      <BrowserRouter>
        <DataContextProvider>

          <AnimatedRoutes />

        </DataContextProvider>
      </BrowserRouter>
  

  )
}

export default App
