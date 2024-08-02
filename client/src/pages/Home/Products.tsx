import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "src/hooks/useFetchData";
import { useProductCart } from "src/hooks/useProdutCart";
import { Product } from "src/types/Product";

const Products = () => {
  const { datas: products } = useFetchData("/products");
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useProductCart();

  const handleAddToCart = (product: Product) => {
    if (quantity <= 0) return;
    addToCart({ product, quantity });
  };
  return (
    <>
    <img src="https://tienganhnghenoi.vn/wp-content/uploads/2023/09/banner-iphone-7-min.jpg" width="100%" height={"500px"} />
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
                display: "flex", 
                justifyContent: "center",
                width: "100%",
                transform: "translateY(350%)",
                transition: "all 0.4s ease-in-out !important",
                "&:hover": { transform: "translateY(0)" },
              }}
            >
              <Button variant="contained" sx={{ bgcolor: "green", width: "50%" }} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
              {/* <Button variant="contained" sx={{ bgcolor: "red" }}>
                Learn More
              </Button> */}
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" sx={{  width: "120px" }}>View</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default Products;