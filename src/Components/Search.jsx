
import { useContext } from 'react'
import styled from 'styled-components'
import DataContext from '../Context/DataContext'

import "../Styles/Search.css"

export default function () {

    const { query, setQuery, theme, setTheme } = useContext(DataContext)

    return (
        <div className='SearchContainer'>
            <input className='input' type="text"
                placeholder='Search By Place...'
                value={query} onChange={(e) => { setQuery(e.target.value) }}
            />
            <ThemeButton style={theme ? { background: "#FFFFFF", transition: "1s", boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" } :
                { background: "#312121", color: "white", transition: "1s", boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px" }} onClick={() => { setTheme(!theme) }}>Theme</ThemeButton>
        </div>


    )
}


const ThemeButton = styled.button`
border:0;
border-radius:20px;
padding:0.5rem
`


