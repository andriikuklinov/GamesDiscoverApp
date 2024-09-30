import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '79501d089a9749069e002ffb2835775f'
    }
})