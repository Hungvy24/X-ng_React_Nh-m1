<<<<<<< HEAD
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useFetchData from "src/hooks/useFetchData";
import { Product } from "src/types/Product";

const Products = () => {
  const { datas: products } = useFetchData("/products");
  return (
    <>
      <Typography
        component="h1"
        fontSize={"26px"}
        fontWeight={"bold"}
        sx={{ margin: "10px", textAlign: "center" }}
      >
        Latest product
      </Typography>
      <Stack
        direction={"row"}
        gap={1}
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
          padding: "10px 0",
          width: "100%",
          hover: "none",
        }}
      >
        {products.map((product: Product) => (
          <Card
            sx={{
              maxWidth: 345,
              margin: "10px",
              padding: "6px",
              hover: "none",
              transform: "translateY(0)",
              transition: "all 0.3s ease-in-out",
              "&:hover": { transform: "translateY(-10px)" },
              "&:hover img": { transform: "scale(1.1)" },
              "&:hover .MuiCardContent-root": { transform: "translateY(0)" },
              "&:hover .MuiCardActions-root": { transform: "translateY(0)" },
              "&:hover .MuiTypography-root": { transform: "translateY(0)" },
              "&:hover .MuiButton-root": { transform: "translateY(0)" },
            }}
          >
=======
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from 'src/types/Product'

type Props = {}

const Products = (props: Props) => {
    const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const { data } = await axios.get("/products")
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProduct()
  },[])
  return (
    <>
        <Typography component="h1" fontSize={"26px"} fontWeight={"bold"} sx={{ margin: "10px", textAlign: "center" }}>Latest product</Typography>
      <Stack direction={"row"} gap={1} sx={{ justifyContent: "center", flexWrap: "wrap", margin: "10px 0", padding: "10px 0", width: "100%", hover: "none" }}>
        {products.map((product: Product) => (
          <Card sx={{ maxWidth: 345, margin: "10px", padding: "6px", hover: "none", transform: "translateY(0)", transition: "all 0.3s ease-in-out", "&:hover": { transform: "translateY(-10px)" }, "&:hover img": { transform: "scale(1.1)" }, "&:hover .MuiCardContent-root": { transform: "translateY(0)" }, "&:hover .MuiCardActions-root": { transform: "translateY(0)" }, "&:hover .MuiTypography-root": { transform: "translateY(0)" }, "&:hover .MuiButton-root": { transform: "translateY(0)" } }}>
>>>>>>> 30f7436980ffc62d67e8406c6ab0c9f5424947c6
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
<<<<<<< HEAD
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                color="red"
                fontWeight="bold"
              >
                {product.price}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ minHeight: "50px" }}
              >
                {product.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                width: "100%",
                transform: "translateY(250%)",
                transition: "all 0.4s ease-in-out !important",
                "&:hover": { transform: "translateY(0)" },
              }}
            >
              <Button variant="contained" sx={{ bgcolor: "green" }}>
                Add to cart
              </Button>
              <Button variant="contained" sx={{ bgcolor: "red" }}>
                Learn More
              </Button>
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained">View</Button>
              </Link>
=======
              <Typography gutterBottom variant="body1" component="div" color="red" fontWeight="bold">
                {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ height: "100px" }}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ width: "100%", transform: "translateY(250%)", transition: "all 0.6s ease-in-out", "&:hover": { transform: "translateY(0)" } }}>
              <Button variant="contained" sx={{ bgcolor: "green" }}>Add to cart</Button>
              <Button variant="contained" sx={{ bgcolor: "red" }}>Learn More</Button>
              <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "white" }}><Button variant="contained">View</Button></Link>
>>>>>>> 30f7436980ffc62d67e8406c6ab0c9f5424947c6
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
<<<<<<< HEAD
  );
};

export default Products;
=======
  )
}

export default Products
>>>>>>> 30f7436980ffc62d67e8406c6ab0c9f5424947c6
