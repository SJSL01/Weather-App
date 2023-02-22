import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import "../Styles/Navbar.css"

export default function NavBar() {


    const navigate = useNavigate()


    return (

        <Nav>
            <div onClick={() => { navigate("/") }} className={location.pathname === "/" ? "active" : "inactive"}>
              Home
            </div>
            <div onClick={() => { navigate("/favourite") }} className={location.pathname === "/favourite" ? "active" : "inactive"}>
              Favourites
            </div>
        </Nav>

    )
}


const Nav = styled.nav`
    display:flex;
    justify-content:space-around;
`



