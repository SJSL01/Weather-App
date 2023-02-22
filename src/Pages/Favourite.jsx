import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom"

export default function Favourite() {


    const data = []

    for (const [key] of Object.entries(localStorage)) {
        data.push(key)
    }

    const [favs, setFavs] = useState(data)

    const navigate = useNavigate()



    return (

        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
        >


            {favs.length > 0 ? favs.map(place => {
                return (
                    <div key={crypto.randomUUID()} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                        <Favoutite onClick={() => {
                            const data = localStorage.getItem(place).split(",")
                            navigate("/", { state: { data } })
                        }}>{place}
                        </Favoutite>
                        <div>
                            <DeleteButton onClick={() => {
                                localStorage.removeItem(place)
                                let filtered = favs.filter(p => {
                                    return (p != place)
                                })
                                setFavs(filtered)
                            }}>X</DeleteButton>
                        </div>
                    </div>
                )
            })
                :
                <Message>
                    Ohhhh..... No Favourites Found.
                    Add Some Now!!!!!
                </Message>

            }


        </motion.div>
    )
}


const Favoutite = styled.div`
    display:flex;
    justify-content:center;
    background-color: rgba(255, 255, 255, 0.9);
    margin:0.5rem 1rem;
    font-weight:900;
    padding:1rem;
    border-radius : 20px;
    width:30%;
    cursor:pointer
`


const DeleteButton = styled.button`
    background-color:red;
    border-radius:50%;
    cursor:pointer;
    border:0;
    font-size:1.2rem;
    font-weight:900;

`

const Message = styled.h1`
    text-align: center;
    font-size :2rem;
    font-weight:900;
    color:white;
`