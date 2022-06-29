import React from 'react'
// HOOKS
import { useState, useEffect } from 'react';
// AXIOS
// import axios from "axios";
//CSS
import "./Card.css";
const Card = () => {
  const [item, setItem] = useState([]);


  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then(response => response.json())
      .then(data => setItem(data))

    //WRITTEN IN AXIOS...

    // axios.get("https://www.breakingbadapi.com/api/characters")
    //   .then(response => setItem(response.data))

}, []);
  return (
    <div className='container'>
      {item.map((data) => (
        <div className='cards' key={data.char_id}>
          <div className="img-grid">
            <img src={data.img} alt={data.img} />
          </div>
          <div className="text-grid">
            <h3>{data.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Card;
