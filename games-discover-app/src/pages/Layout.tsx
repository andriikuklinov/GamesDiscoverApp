import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";

export default function Layout(){
    return <>
        <Navbar />
        <Box padding={5}>
            <Outlet />
        </Box>
    </>
}