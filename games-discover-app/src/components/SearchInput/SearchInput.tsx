import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store/store";

export default function SearchInput(){
    const setSearchText = useGameQueryStore(selector => selector.setSearchText);
    const ref = useRef<HTMLInputElement>(null);

    return <>
        <form onSubmit={(event)=>{ 
            event.preventDefault();
            if(ref.current)
                setSearchText(ref.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />}/>
                <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'/>
            </InputGroup>
        </form>
    </>
}