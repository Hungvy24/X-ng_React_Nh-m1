import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Field, Form } from "react-final-form";

import { useMemo } from "react";
import { useCart } from "src/context/cart";
import { useUser } from "src/context/user";
import { useProductCart } from "src/hooks/useProdutCart";
import { InputText } from "src/components/element/InputText";

type CheckoutFormParams = {
  name: string;
  phone: string;
  address: string;
  payment: string;
};

function Checkout() {
  const nav = useNavigate();
  // const { setLoading } = useLoading();
  const { cart } = useCart();
  const { user } = useUser();
  const { getCartUser } = useProductCart();
  const lables = ["Image", "Price", "Quantity"];

  const totalPrice = useMemo(
    () =>
      cart
        ? cart.products.reduce(
            (total, { product, quantity }) => total + product.price * quantity,
            0
          )
        : 0,
    [cart]
  );

  const onSubmit = async (values: CheckoutFormParams) => {
    if (!user || !cart || !cart?.products.length) return;
    try {
      // setLoading(true);
      await axios.post("/orders", {
        ...values,
        products: cart.products,
        user: user._id,
        totalPrice,
      });
      await getCartUser();
      alert("Checkout thank cong");
      nav("/");
    } catch (error) {
    } finally {
      // setLoading(false);
    }
  };
  return (
    <>
      {/* <Banner page="Checkout" /> */}
      {/* Tieu de */}

      <Box
        mt={5}
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          mx: "auto",
          gap: 10,
          minHeight: "50px",
        }}
      >
        <Container
          sx={{
            mb: 10,
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: 5,
          }}
        >
          <Typography variant="h5" fontWeight={500}>
            Billing Details
          </Typography>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              payment: "COD",
            }}
            render={({ values }) => {
              return (
                <Stack gap={3}>
                  <Field
                    name="name"
                    render={({ input, meta }) => (
                      <InputText
                        input={input}
                        label={"Name"}
                        messageError={meta.touched && meta.error}
                      />
                    )}
                  />
                  <Field
                    name="phone"
                    render={({ input, meta }) => (
                      <InputText
                        input={input}
                        label={"Phone"}
                        messageError={meta.touched && meta.error}
                      />
                    )}
                  />
                  <Field
                    name="address"
                    render={({ input, meta }) => (
                      <InputText
                        input={input}
                        label={"Address"}
                        messageError={meta.touched && meta.error}
                      />
                    )}
                  />
                  <Field<string>
                    name="payment"
                    render={({ input }) => {
                      return (
                        <FormControl>
                          <FormLabel> Payment</FormLabel>
                          <RadioGroup {...input}>
                            <FormControlLabel
                              value="COD"
                              control={<Radio />}
                              label="COD"
                            />
                            <FormControlLabel
                              value="BANK"
                              control={<Radio />}
                              label="BANK"
                            />
                          </RadioGroup>
                        </FormControl>
                      );
                    }}
                  />
                </Stack>
              );
            }}
          />
        </Container>

        <Box
          sx={{
            width: "60%",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "5px",
            height: "fit-content",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            overflow: "auto",
          }}
        >
          <Typography
            fontWeight={600}
            variant="h5"
            sx={{ textAlign: "center" }}
          >
            Products
          </Typography>
          {/* <LabelWrapper
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            sx={{ width: "100%", padding: "20px" }}
          >
            {lables.map((label, index) => (
              <Typography key={index} fontWeight={500} sx={{ width: "50%" }}>
                {label}
              </Typography>
            ))}
          </LabelWrapper> */}
          <Stack
            gap={3}
            my={3}
            sx={{ width: "100%", bgColor: "gray", padding: "10px" }}
          >
            {cart?.products.map((item, index) => (
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography fontWeight={500}>
                  <img src={item.product.image} alt="" width={"50px"} />
                </Typography>
                <Typography fontWeight={500}> {item.product.price}đ</Typography>
                <Typography fontWeight={500}> {item.quantity}</Typography>
              </Stack>
            ))}
          </Stack>
          <Typography
            fontWeight={500}
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {" "}
            <Box sx={{ fontWeight: "bold", fontSize: "18px", color: "red" }}>
              Total:
            </Box>
            {totalPrice}
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "100%", mt: 3 }}
            // onClick={() => onSubmit(values)}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Checkout;

const Wrapper = styled(Stack)({
  paddingTop: 72,
});

const LabelWrapper = styled(Stack)(({ theme }) => ({
  // background: "#F9F1E7",
  height: 55,
  margin: "0 auto",
}));
