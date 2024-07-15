import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Stack,
  TextField,
  Typography,

} from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Product } from "src/types/Product";
import { useGlobalContext } from "src/context";
import Loading from "src/components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, setLoading } = useGlobalContext()
  const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState<number>(1);
  const [value, setValue] = useState<number | null>(2);

  const handlerGetProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/products/" + id);
      setProduct(data);
    } catch (error) {
      alert(error);
      navigate("/NotFound");
    } finally {
      setLoading(false);
    }
  };

  console.log(quantity);

  useEffect(() => {
    handlerGetProduct();
  }, []);

  return (
    <>
      <Box width={"1200px"} mx={"auto"}>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Box width={"50%"}>
            <img src={product?.image} alt="" width={"100%"} />
          </Box>
          <Box width={"50%"}>
            <Typography variant="h3">{product?.title}</Typography>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            <Typography variant="body2" mt={2} color={"#1a1e23"}>
              {product?.description}
            </Typography>
            <Typography variant="h3" mt={2} fontSize={"30px"} fontWeight={600}>
              ${product?.price}
            </Typography>
            <Box position={"relative"} width={"90px"}>
              <Box
                position={"absolute"}
                top={"24%"}
                zIndex={10}
                left={5}
                onClick={() =>
                  setQuantity((state: number) => (state == 1 ? 1 : --state))
                }
              >
                <RemoveIcon
                  sx={{
                    fontSize: "19px",
                    cursor: "pointer",
                    ":hover": { color: "#ccc" },
                  }}
                />
              </Box>
              <TextField
                type="text"
                sx={{
                  display: "block",
                  textAlign: "center",
                  margin: "32px 0",
                  "& .MuiInputBase-input": {
                    height: "5px",
                    textAlign: "center",
                    fontSize: "18px",
                  },
                }}
                defaultValue={quantity}
                value={quantity}
              />
              <Box
                position={"absolute"}
                top={"24%"}
                zIndex={10}
                right={5}
                onClick={() =>
                  setQuantity((state: number) => (state == 20 ? 20 : ++state))
                }
              >
                <AddIcon
                  sx={{
                    fontSize: "19px",
                    cursor: "pointer",
                    ":hover": { color: "#ccc" },
                  }}
                ></AddIcon>
              </Box>
            </Box>
            <Stack spacing={2} direction="row">
              <Button variant="contained" sx={{ height: "55px" }} fullWidth>
                Add to cart
              </Button>
              <Button variant="outlined" sx={{ height: "55px" }} fullWidth>
                Buy now
              </Button>
            </Stack>
          </Box>
        </Stack>
        <Box>
          <Typography variant="h3" my={5} fontSize={"30px"} fontWeight={600}>
            Reviews
          </Typography>
          <Box>
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem sx={{ paddingLeft: 0 }}>
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      {loading && (
        <Loading />
      )}
    </>
  );
};

export default ProductDetail;
