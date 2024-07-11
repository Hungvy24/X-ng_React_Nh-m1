import { Button, Container, Stack, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from 'src/types/Product';

type Props = {}

const ProductDetail = (props: Props) => {
    const {id} = useParams();
    const [product, setProduct] = useState<Product>()

    useEffect(()=>{
      const getProduct = async ()=>{
        const {data} = await axios.get(`http://localhost:3000/products/${id}`)
        setProduct(data)
      }
      getProduct()
    },[])
    
  return (
    <>
    <Container>
        {product && (
          <Stack direction={"row"} gap={3} sx={{justifyContent: "center", flexWrap: "wrap", margin: "10px"}}>
            <img src={product.image} alt="" width={"400px"} />
            <Stack gap={3} sx={{width: "500px", padding: "10px"}}>
              <Typography component="h1" fontSize={"26px"}>
                {product.title}
              </Typography>
              <Typography fontWeight={"bold"} color={"Highlight"}>
                ${product.price}
              </Typography>
              
              <Typography>{product.description}</Typography>
              <Button variant="outlined" sx={{width: "100%", height: "40px"}}>Add to cart</Button>
            </Stack>
          </Stack>
        )}
      </Container>
    </>
  )
}

export default ProductDetail