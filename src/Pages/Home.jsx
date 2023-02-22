import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../Components/Card'
import DataContext from '../Context/DataContext'

import "../Styles/Home.css"
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

export default function Home() {


    const { searchResults, theme, weatherInfo, getWeatherInfo, select } = useContext(DataContext)

    const location = useLocation()

    const [error, setError] = useState(false)

    const selected = location.state


    useEffect(() => {
        navigator.permissions.query({ name: "geolocation" }).then(result => {
            if (result.state == "granted") {
                navigator.geolocation.getCurrentPosition(getPosition)
            } else if (result.state === "prompt") {
                navigator.geolocation.getCurrentPosition(getPosition)
            } else if (result.state == "denied") {
                setError("Please Enable Location")
            }
        })

    }, [])

    const getPosition = async (position) => {
        let coords;
        if (selected) {
            coords = selected.data
        } else {
            coords = ([`${position.coords.latitude}`, `${position.coords.longitude}`])
        }
        await getWeatherInfo(coords)
    }

    return (
        <>
            <div style={{ position: "absolute", width: "90%", zIndex: "5" }}>
                {searchResults && searchResults.map(res => {
                    return (
                        <Place style={theme ? { background: "rgba(128, 128, 128, 0.744)", color: "white" } : {}} key={crypto.randomUUID()} onClick={() => { getWeatherInfo([res.lat, res.lon]) }}>{res.name},{res.country}</Place>
                    )
                })}
            </div>

            <motion.div
                className={theme ? 'cardContainer light' : `cardContainer dark`}
                initial={{ width: "50%" }}
                animate={{ width: "100%" }}
            >


                <div className={searchResults.length ? "blur" : "noBlur"}>
                    <Card theme={theme} weatherInfo={weatherInfo} />
                </div>

            </motion.div>

        </>
    )
}

const Place = styled.div`
list-style:none;
background-color: rgba(255, 255, 255, 0.9);
margin:0.5rem 0;
font-weight:900;
padding:1rem;
border-radius : 20px;
text-align:center;
`