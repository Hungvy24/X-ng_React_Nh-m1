import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

type FlashProps = {
  isCheck: any
};

function Flash({ isCheck }: FlashProps) {

  const [show, setShow] = useState(isCheck.isShow);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={show}
      onClose={() => setShow(false)}
      autoHideDuration={2000}
    >
      <Alert severity={isCheck.type}>{isCheck.content}</Alert>
    </Snackbar>
  );
}

export default Flash;
