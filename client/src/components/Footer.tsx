import { Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{width: "100%", height: "50px", backgroundColor: "blue", color: "white", padding: "20px", marginBottom: "10px", marginTop: "50px"}}
      >
        <Typography>© 20214. All rights reserved.</Typography>
        <Typography>Nhóm 1 </Typography>
      </Stack>
    </>
  )
}

export default Footer