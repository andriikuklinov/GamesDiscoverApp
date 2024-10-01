import { HStack, Image } from "@chakra-ui/react";
import logo from '../../assets/react.svg';
import ColorSwitch from "../ColorSwitch/ColorSwitch";
import SearchInput from "../SearchInput/SearchInput";

interface Props{
    onSearch: (searchText: string) => void;
}

export default function Navbar({onSearch}: Props){
    return <>
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="40px"/>
            <SearchInput onSearch={onSearch}/>
            <ColorSwitch />
        </HStack>
    </>
}