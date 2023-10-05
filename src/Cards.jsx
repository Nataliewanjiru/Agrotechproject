import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";


const Cards = () => {
 const[data,setData] = useState([])
 const { userId} = useParams();



    return (
        <>
        <h1>Welcome</h1>
        <ul>
            <li>
            <Link to={`/crops/${userId}`}>Crops</Link>
            </li>
            <li>
             <Link to={`/livestocks/${userId}`}>Livestocks</Link>
           </li>
        </ul>
        </>
    )
}

export default Cards;