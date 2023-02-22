import { createContext, useEffect, useState } from "react";
import { getWeather, PlaceList } from "../API/getWeatherInfo";


const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [weatherInfo, setWeatherInfo] = useState([])
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])


    const [theme, setTheme] = useState(false)


    const getPlaces = async () => {
        try {
            const places = await PlaceList(query)
            setSearchResults(places)
        } catch (error) {
            console.log(error);
        }
    }

    const getWeatherInfo = async (coords) => {
        setQuery("")
        const res = await getWeather(coords)
        setWeatherInfo(res)
        setSearchResults([])
    }



    useEffect(() => {

        if (query == "" || query == null) {
            setSearchResults([])
        }

        if (query != "" && query != null) {

            let timer = setTimeout(() => {
                getPlaces()
            }, 400)

            return () => clearInterval(timer)
        }

    }, [query])


    return (

        <DataContext.Provider value={{
            query, setQuery, getPlaces, getWeatherInfo, weatherInfo, setWeatherInfo,
            searchResults, setSearchResults,
            theme, setTheme 
        }} >
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;