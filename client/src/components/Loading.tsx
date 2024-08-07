import { Box, CircularProgress } from "@mui/material"

const Loading = () => {
    return (
        <Box
        position={"fixed"}
        top={0}
        bottom={0}
        left={0}
        right={0}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#ffffffcf"}
    >
        <CircularProgress />
    </Box>
    )
}

export default Loading ; 