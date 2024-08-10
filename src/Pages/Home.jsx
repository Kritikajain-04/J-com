import React from 'react'
import aa from '../Images/front.jpg'
import img from '../Images/cafe2.jpeg'
import pic from '../Images/cafe.jpeg'
import ss from '../Images/coffee.jpeg'
export default function Home() {
  return (
    <div>
      <img src={aa} width="100%"  height="350px"/>
       <img src={img} width="100%"  height="350px"/>
      <img src={pic} width="100%" height="300px"/>
      <img src={ss} width="50%" height="800px"/>
    </div>
  )
}
