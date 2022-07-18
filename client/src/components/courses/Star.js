import React from 'react'
import Rating from './rating/Rating';
// import styles from "./Star.module.css"

export default function Star() {
  const stars = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  return(
  <div>
    {stars.map((value, index) => (
        <Rating key={index} value={value}/>
      ))}
  </div>)
}