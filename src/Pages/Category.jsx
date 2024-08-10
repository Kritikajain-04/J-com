import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useEffect,useState } from 'react';
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

export default function Category() {
const [Category,setCategory]=useState([])

useEffect(()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>{
        console.log(res);
        setCategory(res.data)
    }
    ).catch((error)=>{
        console.log(error);
        })

},[])
console.log(Category,"categories")
 


return(
  <div>
       <Typography gutterBottom variant="h4" component="div"
       sx={{ color: "black", 
       textAlign: "center",
        margin: "10px" }}>

        Browse product categories
      </Typography>
    <Grid container spacing={2} 
    sx={{display:"flex",
      alignItems:"center",
      justifyContent:"center",
      margin:"10px",
      padding:"10px",
      flexWrap:"wrap"
      }} >
  {Category.map((item,i)=>{
    return(
      <Grid item xs={8} sm={6} md={4} >
  <Card sx={{ maxWidth: 345 }}style={{background:"blue",padding:"10px",marginTop:"20px"}}>
      
      <CardContent>
       <Link to={`/cat-Products/${item.name}`}> <Typography gutterBottom variant="h5" component="div">
       {item.name}
        </Typography></Link>
      </CardContent>
     
    </Card>
    </Grid>
)

  }

  )}


  </Grid>
  
    </div>
  );
}