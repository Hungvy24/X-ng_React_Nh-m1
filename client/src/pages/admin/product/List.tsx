import {
  Alert,
  Button,
  Container,
  Paper,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmDialog from "src/components/ConfirmDialog";
import Flash from "src/components/Flash";
import { ProductContext } from "src/conts/ProductProvider";
import { Product } from "src/types/Product";

function AdminProductList() {
  const [showFlash, setShowFlash] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [idDelete, setIdDelete] = useState<string | null>(null);
  const [value, setValue] = useState("");
  const [arrange, setArrange] = useState("");
  const [fillterPro, setFilterPro] = useState<Product[]>([]);
  const [dispathProducts] = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("products");
      dispathProducts({
        type: "SET_PRODUCT",
        payload: data.data,
      });
      setFilterPro(data.data);
    })();
  }, []);

  const getAllProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const handleConfirm = (id: string) => {
    setConfirm(true);
    setIdDelete(id);
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/products/" + idDelete);
      setShowFlash(true);
      getAllProduct();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let filterProduct = [...products];
    if (value) {
      filterProduct = filterProduct.filter((pro: Product) =>
        pro.title.toLowerCase().includes(value.toLowerCase())
      );
    }

    if (arrange === "ascending") {
      filterProduct.sort((a: Product, b: Product) => a.price - b.price);
    }
    if (arrange === "descending") {
      filterProduct.sort((a: Product, b: Product) => b.price - a.price);
    }

    setFilterPro(filterProduct);
  }, [value, arrange, products]);

  return (
    <>
      <Container>
        <Flash isShow={showFlash} />
        <Stack gap={2}>
          <Typography variant="h4" textAlign={"center"}>
            Products List
          </Typography>
          <Link to="/admin/product/add">
            <Button variant="contained">Add Product</Button>
          </Link>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Desc</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onchange={(e) => setValue(e.target.value)}
                  >
                    <TableCell component="th" scope="row">
                      {product.title}
                    </TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.description}</TableCell>
                    <TableCell align="right">
                      <img src={product.image} alt="" width={100} />
                    </TableCell>
                    <TableCell align="right">{product.category.name}</TableCell>
                    <TableCell align="right">
                      <Stack
                        direction={"row"}
                        gap={3}
                        justifyContent={"center"}
                      >
                        <Link to={""}>
                          <Button variant="contained">Edit</Button>
                        </Link>
                        <Button
                          variant="contained"
                          sx={{ bgcolor: "red" }}
                          onClick={() => handleConfirm(product._id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ConfirmDialog
              confirm={confirm}
              onConfirm={setConfirm}
              onDelete={handleDelete}
            />
          </TableContainer>
        </Stack>
      </Container>
    </>
  );
}

export default AdminProductList;
