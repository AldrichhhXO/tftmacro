const express = require('express');
const axios = require('axios').default
const https = require('https')
const Router = express.Router();


Router.get('/player/*', async (req, res, next) => {
    let config = {
        "X-Riot-Token": process.env.RIOT_API
    }
    //  let firstResponse = await axios.get('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${req.query.name}', {headers: config})

    let firstResponse = await axios.get('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/FadedOffTheHenny', {headers: config})
    let secondUrl = 'https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/' + firstResponse.data.id
    let secondResponse = await axios.get(secondUrl, {headers: config})
    res.json(secondResponse.data)
})


Router.get('/items', (req, res, next) => {
    
})

Router.get('/champions', (req, res, next) => {

})

Router.get('/tft/augments', (req, res, next) => {

})

module.exports = Router;