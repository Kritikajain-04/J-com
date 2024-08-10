import { blue } from '@mui/material/colors'
import React from 'react'
import zz from '../Images/cf.jpg'
import aa from '../Images/coffee.jpeg'
import aaa from '../Images/shake.jpeg'

export default function About() {
  return (
    <div style={{background:"pink",border:"10 px"}}>
       <img src={zz} width="100%"  height="350px" />
       <p>How Coffee Is Made: A Comprehensive GuideLearn about how coffee is made from planting seeds to brewing your perfect cup! 
        We explore all aspects of production including decaffeination processes.Glenna Matthys04-05-20233 minutes 20, seconds read
       Coffee is one of the most popular beverages in the world, and it's no wonder why. 
       Its unique flavor and aroma make it a favorite among coffee lovers. But how is coffee made? In this article, we'll explore the process of coffee production, from planting the seeds to brewing the perfect cup. Coffee beans are actually seeds that come from a flowering shrub native to tropical Asia and Africa. These coffee trees thrive in certain climates near the equator,
        where there is abundant sunshine, no frost, and plenty of rain.</p>
       <img src={aa} width="50%"  height="350px" style={{marginLeft:"350px"}}/>
       <h1 style={{marginLeft:"350px"}}>Hot coffee</h1>
       <p>Milk – I’ve found that whole milk and 2% milk does a better job of frothing than skim milk,
         but feel free to use whatever you have on hand. You can even make a vegan coffee using your favorite plant-based 
         milk alternative. There’s no need to boil it if it isn’t dairy; simply heat it until it reaches the temperature you desire.
       Sugar – I used cane sugar here, but feel free to swap in the sweetener of your choice. 
       Brown sugar or powdered jaggery will give more of a caramelly taste.
       Hot Water – Preferably boiling!
       </p>
       <img src={aaa} width="50%"  height="350px" style={{marginLeft:"350px"}}/>
       <p>1. Firstly, add 1 tablespoon of instant coffee to a bowl.
         If using brewed filter coffee or espresso you can add ¼ cup directly to the blender jar as shown in step 3 below.
         2. Add ¼ cup of warm water (not hot) to the instant coffee. Stir and mix very well.
         3. Add the coffee solution to a blender jar.
         4. Next add 3 to 4 tablespoons of sugar.
         5. Blend for a minute or until the coffee solution becomes frothy and the color fades to a lighter shade of brown.
         6. Add 6 or 7 ice cubes. For a thicker blended cold coffee use just 2 to 4 cubes of ice.
         7. Then pour in 2 cups of cold or chilled milk. To make this recipe, I used whole milk. See FAQs below for low fat cold coffee tips.
         8. Blend once for again just a few seconds, until everything is mixed well and you get a nice frothy and foamy layer on top
          now your milkshake is ready to drink.</p>
    </div>
  )
}
