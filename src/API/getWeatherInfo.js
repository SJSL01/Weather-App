import axios from "axios"

console.log(import.meta.env);
export const getWeather = async (coords) => {

    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${import.meta.env.VITE_API_KEY}&units=metric`)
        return res.data
    } catch (error) {
        console.log(error.message)
    }

}

export const PlaceList = async (query) => {

    try {
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${import.meta.env.VITE_API_KEY}`)
        console.log(res.data)
        // const coords = [res.data[0].lat, res.data[0].lon]
        // const response = await getWeather(coords)
        // console.log(response.data)
        return res.data
    } catch (error) {
        console.log(error.message)
    }

}