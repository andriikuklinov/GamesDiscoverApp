import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ColorSwitch(){
    const { toggleColorMode, colorMode } = useColorMode();

    return <>
        <HStack>
            <Switch colorScheme='green' checked={ colorMode == 'dark' } onChange={toggleColorMode}/>
            <Text whiteSpace='nowrap'>Dark Mode</Text>
        </HStack>
    </>
}