import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import { Game } from "../../hooks/useGames"
import PlatformIconList from "../PlatformIconList/PlatformIconList"
import CriticScore from "../CriticScore/CriticScore"
import getCroppedImageUrl from "../../services/common"
import Emoji from "../Emoji/Emoji"
import { Link } from "react-router-dom"

interface Props{
    game: Game
}
export default function GameCard({ game }: Props){
    return <>
        <Card>
            <Image height='219px' src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map((obj)=> obj.platform)}/>
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>
                    <Link to={'/games/' + game.slug }>{game.name}</Link>
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    </>
}