import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();

    return <>
        <Box padding={5}>
            <Heading>Something went wrong...</Heading>
            <Text>{ isRouteErrorResponse(error) ? 'This page does not exist.' : 'An unexpected error occurred.' }</Text>
        </Box>
    </>
}