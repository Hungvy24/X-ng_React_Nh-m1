import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'src/components/Header'

type Props = {}

const HomeLayout = (props: Props) => {
  return (
    <>
        <Stack>
            <Header/>
            <Outlet />
            
        </Stack>
    </>
  )
}

export default HomeLayout