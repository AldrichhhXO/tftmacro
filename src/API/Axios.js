import axios from 'axios'


const Axios = axios.create({
    baseURL: 'https://na1.api.riotgames.com/',

})
export default Axios;