import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/Loading";
import NotFound from "src/components/Notfound";
import { useGlobalContext } from "src/context";
import { ProductForm } from "src/types/Product";

function AdminProductAdd() {
  const nav = useNavigate();
  const { loading, setLoading, setFlash} = useGlobalContext()
  const onSubmit = async (values: ProductForm) => {
    try {
      setLoading(true)
      await axios.post("/products", values);
      setFlash((state: any) => ({...state,isShow: true , type: "success", content: "Thêm thành công"}))
      nav("/admin/product/list");
    } catch (error) {
      setFlash((state: any) => ({...state,isShow: true , type: "error", content: "Thêm thất bại"}))
      return <NotFound />
    } finally {
      setLoading(false)
    }
  };

  const validate = (values: ProductForm) => {
    const { title, image, category, price } = values;
    const errors: ValidationErrors = {};
    if (!title) errors.title = "Can nhap title vao";
    if (!image) errors.image = "Can nhap image vao";
    if (!category) errors.category = "Can nhap category vao";
    if (!price) errors.price = "Can nhap price vao";

    return errors;
  };
  return (
    <>
      <Container>
        <Stack gap={2}>
          <Typography variant="h3" textAlign={"center"}>
            Add Product
          </Typography>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={{ isShow: true }}
            render={({ values }) => {
              return (
                <Stack>
                  <Field
                    name="title"
                    render={({ input, meta }) => {

                      return (
                        <TextField
                          // error
                          label="Title"
                          variant="standard"
                          helperText={meta.touched && meta.error}
                          {...input}
                        />
                      );
                    }}
                  />
                  <Field
                    name="image"
                    render={({ input, meta }) => {
                      return (
                        <TextField
                          label="Image"
                          variant="standard"
                          helperText={meta.touched && meta.error}
                          {...input}
                        />
                      );
                    }}
                  />
                  <Field<string>
                    name="description"
                    render={({ input, meta }) => {
                      return (
                        <TextField
                          label="Description"
                          variant="standard"
                          {...input}
                        />
                      );
                    }}
                  />
                  <Field<number>
                    name="price"
                    render={({ input, meta }) => {
                      return (
                        <TextField
                          error
                          label="Price"
                          variant="standard"
                          {...input}
                          type="number"
                          helperText={meta.touched && meta.error}
                        />
                      );
                    }}
                  />
                  <Field<string>
                    name="isShow"
                    type="checkbox"
                    render={({ input, meta }) => {
                      return (
                        <FormControlLabel
                          control={<Checkbox {...input} />}
                          label="Show Product"
                        />
                      );
                    }}
                  />
                  <Field<string>
                    name="category"
                    render={({ input, meta }) => {
                      return (
                        <FormControl fullWidth>
                          <InputLabel>Category</InputLabel>
                          <Select label="Category" {...input} error>
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value={"6693a6e23e21098d9255638c"}>
                              Điện thoại
                            </MenuItem>
                            <MenuItem value={"6693a7013e21098d92556cc4"}>
                              Laptop
                            </MenuItem>
                            <MenuItem value={"6693a71d3e21098d92557510"}>
                              Đồng hồ
                            </MenuItem>
                          </Select>
                          {meta.touched && meta.error && (
                            <FormHelperText>{meta.error}</FormHelperText>
                          )}
                        </FormControl>
                      );
                    }}
                  />

                  <Button type="submit" variant="contained" onClick={() => onSubmit(values)} sx={{ marginTop: "16px" }}>
                    Submit
                  </Button>
                </Stack>
              );
            }}
          />
        </Stack>
      </Container>
      {loading && (
        <Loading />
      )}
    </>
  );
}

export default AdminProductAdd;
