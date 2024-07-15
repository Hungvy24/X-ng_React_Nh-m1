import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

type Props = {}

const HomeLayout = (props: Props) => {
  return (
    <>
        <Box>
            <Header/>
            <Outlet />
            <Footer/>
        </Box>
    </>
  )
}

export default HomeLayout