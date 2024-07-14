
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from 'src/components/Banner'
import { Product } from 'src/types/Product'


const Homepage = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    const getAllProduct = async () => {
      try {
        const { data } = await axios.get("/products")
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProduct()
  })
  return (
    <>
    <Banner/>
    <Typography component="h1" fontSize={"26px"} fontWeight={"bold"} sx={{margin: "10px", textAlign: "center"}}>Sản phẩm mới nhất</Typography>
      <Stack direction={"row"} gap={1} sx={{ justifyContent: "center", flexWrap: "wrap", margin: "10px", padding: "10px", width: "100%" }}>
      {products.map((product:Product) => (
            <Card sx={{ maxWidth: 345, margin: "10px" }}>
            <CardMedia 
              component="img"
              alt="green iguana"
              height="140"
              image={product.image}
              sx={{ objectFit: "contain", height: "200px" }} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography gutterBottom variant="body1" component="div" color="red" fontWeight="bold">
                {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ width: "100%", justifyContent: "center" }}>
              <Button variant="contained" sx={{bgcolor: "green"}}>Share</Button>
              <Button variant="contained" sx={{bgcolor: "red"}}>Learn More</Button>
              <Link to={`/product/${product._id}`} style={{textDecoration: "none", color: "white"}}><Button variant="contained">Xem</Button></Link>
            </CardActions>
          </Card>
          ))}
          </Stack>
    </>
  )
}

export default Homepage