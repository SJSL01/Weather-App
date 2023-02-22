import styled from "styled-components"
import "../Styles/Card.css"

import whiteHeart from "../assets/whiteHeart.png"
import redHeart from "../assets/redHeart.png"
import { useContext, useState } from "react"
import DataContext from "../Context/DataContext"

export default function Card({ weatherInfo, handleFav }) {


    const { theme } = useContext(DataContext)


    const [isFav, setIsFav] = useState(false)


    const Savefav = () => {
        setIsFav(!isFav)
        if (localStorage.getItem(weatherInfo.name)) {
            localStorage.removeItem(weatherInfo.name)
            // setIsFav(false)
        } else {
            localStorage.setItem((weatherInfo.name), [weatherInfo.coord.lat, weatherInfo.coord.lon])
            // setIsFav(true)
        }
        setIsFav(!isFav)

    }
    return (
        <>
            {weatherInfo.weather &&


                <div className={theme ? "cardLight" : "cardDark"}>

                    <div className="top" style={{ display: "flex", justifyContent: "space-between" }}>

                        <div style={{ display: "flex", flexDirection: "column" }}>

                            <Place className="place">
                                {weatherInfo.name}<span style={{ fontSize: "1.5rem" }}>,</span>
                                <span style={{ fontSize: "2rem" }}> {weatherInfo.sys.country}</span>
                            </Place>

                            <Temperature className="temperature">
                                {weatherInfo.main.temp.toFixed(1)}<sup>°c</sup>
                            </Temperature>
                        </div>



                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>


                            <img style={{backgroundColor:"#212121",borderRadius:"50%",padding:"0.2rem"}} src={localStorage.getItem(weatherInfo.name) ? redHeart : whiteHeart}
                                onClick={() => { Savefav() }} />





                            <Icon className="icon"
                                src={`https://openweathermap.org/img/w/${weatherInfo?.weather[0]?.icon}.png`}
                                alt="weather" />
                        </div>

                    </div>


                    <Divide />

                    <CurrentWeather>
                        {weatherInfo.weather[0].main}({weatherInfo.weather[0].description})
                    </CurrentWeather>
                    <CurrentFeelsLike>
                    </CurrentFeelsLike>


                    <Divide />

                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                        <TempInfo>
                            <div style={{ textAlign: "center" }}>
                                Max Temp <br /> {weatherInfo.main.temp_max.toFixed(1)}<sup>°c</sup>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                Feels Like <br /> {weatherInfo.main.feels_like.toFixed(1)}<sup>°c</sup>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                Min Temp <br /> {weatherInfo.main.temp_min.toFixed(1)}<sup>°c</sup>
                            </div>
                        </TempInfo>

                    </div>

                </div>

            }
        </>
    )
}



const Place = styled.span`
    font-weight:1000;
    font-size:3.5rem;
    @media (width<500px) {
        font-size:2rem;
          }
`

const Temperature = styled.span`
    font-weight:900;
    font-size:2.5rem;
    align-self:center
`

const Icon = styled.img`
    border-radius:50%;
    width:5rem;
`

const CurrentWeather = styled.div`
    font-size:2rem;
    font-weight: 900;
    text-align:center;
    @media (width<500px) {
        font-size:1.5rem;
          }
  
`
const CurrentFeelsLike = styled.div`
    font-size:1.5rem;
    font-weight: 900;
    text-align:center;
`

const TempInfo = styled.div`
width:100%;
    display:flex;
    justify-content:space-between;
    font-size:1.3rem;
    @media (width<500px) {
        font-size:0.9rem;
          }
    
`

const Divide = styled.hr`
    color:gray;
    height:1px;
    width:100%;
    margin: 2rem 0;
`