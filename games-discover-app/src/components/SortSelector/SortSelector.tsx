import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder: (order: string) => void;
    sortOrder: string;
}

export default function SortSelector({onSelectSortOrder, sortOrder}: Props){
    const arrayOrders = [
        { value: '', label: 'Relevance'},
        { value: '-added', label: 'Date added'},
        { value: 'name', label: 'Name'},
        { value: '-released', label: 'Release date'},
        { value: '-metacritic', label: 'Popularity'},
        { value: '-rating', label: 'Average rating'}
    ]

    const currentSort = arrayOrders.find(order => order.value == sortOrder)

    return <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentSort?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {arrayOrders.map(order=> <MenuItem key={order.value} onClick={()=> onSelectSortOrder(order.value)}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    </>
}