import { Stack } from "@mui/material";
import React from "react";

type Props = {};

const Notfound = (props: Props) => {
  return (
    <Stack gap={2}>
      <img
        src="https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534.jpg"
        alt=""
      />
    </Stack>
  );
};

export default Notfound;
