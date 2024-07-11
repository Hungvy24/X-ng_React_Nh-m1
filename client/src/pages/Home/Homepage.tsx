import { Button } from '@mui/base'
import { Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from 'src/types/Product'

type Props = {}

const Homepage = (props: Props) => {
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
    <div>
      <Stack direction={"row"} gap={1} sx={{ justifyContent: "center", flexWrap: "wrap", margin: "10px" }}>
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
            <CardActions>
              <Button >Share</Button>
              <Button >Learn More</Button>
              {/* <Link to={`/product/${product._id}`}>Xem</Link> */}
              <Button ><Link to={`/product/${product._id}`}>Xem</Link></Button>
            </CardActions>
          </Card>
          ))}
          </Stack>
    </div>
  )
}

export default Homepage