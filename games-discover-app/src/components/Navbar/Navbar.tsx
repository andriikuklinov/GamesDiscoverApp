import { HStack, Image } from "@chakra-ui/react";
import logo from '../../assets/react.svg';
import ColorSwitch from "../ColorSwitch/ColorSwitch";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";

export default function Navbar(){
    return <>
        <HStack justifyContent='space-between' padding='10px'>
            <Link to='/'>
                <Image src={logo} boxSize="40px" objectFit='cover'/>
            </Link>
            <SearchInput/>
            <ColorSwitch />
        </HStack>
    </>
}