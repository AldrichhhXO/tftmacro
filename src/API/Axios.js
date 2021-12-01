import axios from 'axios'
const dotenv = require('dotenv').config()

const headers = {
    'X-Riot-Token': process.env.RIOT_KEY,
    'Access-Control-Allow-Origin': '*'

}

const Axios = axios.create({
    baseURL: 'https://na1.api.riotgames.com/',
    headers: headers
})


export default Axios;