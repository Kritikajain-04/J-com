import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function FilterProduct() {
  const { catname } = useParams()
  console.log(catname, "catname")
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${catname}`)
      .then((res) => {
        console.log(res, "res");
        setProduct(res.data.products)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  console.log(product, "product")

  return (
    <>
      <Typography gutterBottom variant="h4" component="div"
       sx={{ color: "black", 
       textAlign: "center",
        margin: "10px" }}>

        {catname} Products
      </Typography>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        margin: "20px",
        gap: "20px",
        justifyContent: "center"
      }}>

        {product .length>0?product?.map((item, i) => {
          return (




            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={item.thumbnail}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "blue" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  Rs/- {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ background: "#bd3376", color: "#ffffff" }}>Share</Button>
                <Button size="small" sx={{ background: "#bd3376", color: "#ffffff" }}>Learn More</Button>
              </CardActions>
            </Card>

          )
        }):"No data found for this category"}


      </div>
    </>
  )
}
