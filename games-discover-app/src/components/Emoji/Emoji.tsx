import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";
import { IconType } from "react-icons";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

interface Props{
    rating: number;
}

export default function Emoji({rating}: Props){
    debugger;
    const emojiMap: { [key: number]: { src: ReactElement, alt: string} } = {
        3: { src: <BsStar/>, alt: 'low'},
        4: { src: <BsStarHalf fill="gold"/>, alt: 'recomended'},
        5: { src: <BsStarFill fill="gold"/>, alt: 'exceptional'},
    };

    if(rating < 3) return null;
    
    return <>
        <Box marginTop={1}>
            {emojiMap[rating]?.src}
        </Box>
    </>
}