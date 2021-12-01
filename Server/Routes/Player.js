const { RouterRounded } = require('@mui/icons-material');
const express = require('express');
const axios = require('axios')

const https = require('https')
const Router = express.Router();


Router.get('/', (req, res, next) => {

    let headers = {
        'X-Riot-Token': 'RGAPI-71759e7f-fa31-4118-8fa1-2db8954c2fb5'
    }

    axios.get('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/FadedOffTheHenny')
        .then(res => console.log(res.data))
})