import { HStack, Image } from "@chakra-ui/react";
import logo from '../../assets/react.svg';
import ColorSwitch from "../ColorSwitch/ColorSwitch";
import SearchInput from "../SearchInput/SearchInput";

export default function Navbar(){
    return <>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="40px"/>
            <SearchInput />
            <ColorSwitch />
        </HStack>
    </>
}