import { HStack, Image } from "@chakra-ui/react";
import logo from '../../assets/react.svg';
import ColorSwitch from "../ColorSwitch/ColorSwitch";

export default function Navbar(){
    return <>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="40px"/>
            <ColorSwitch />
        </HStack>
    </>
}