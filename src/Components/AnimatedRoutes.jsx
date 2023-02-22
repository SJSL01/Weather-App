
import { Routes, Route, useLocation } from 'react-router-dom'
import Favourite from '../Pages/Favourite'
import Home from '../Pages/Home'

import { AnimatePresence } from "framer-motion"
import { DataContextProvider } from '../Context/DataContext'
import NavBar from './NavBar'
import Search from './Search'


export default function AnimatedRoutes() {

    const location = useLocation()

    return (
        <>
            <NavBar />
            {location.pathname === "/" && <Search />}

            <AnimatePresence>


                <Routes location={location}>


                    <Route path='/' element={<Home />} />
                    <Route path='/favourite' element={<Favourite />} />


                </Routes>

            </AnimatePresence>
        </>
    )
}
