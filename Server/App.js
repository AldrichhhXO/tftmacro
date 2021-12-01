const express = require('express');
const axios = require('axios')
//const PlayerRouter = require('./Routes/Player')
const path = require('path')
const app = express();
const FileWriter = require('./Tools/FileWriter')

const tftItems = require('./assets/TFT/TFT_Items.json')

//app.use('/tft', PlayerRouter)

let headers = {
    'X-Riot-Token': 'RGAPI-71759e7f-fa31-4118-8fa1-2db8954c2fb5'
}

// Getting Summoner by Name
//const summoner = await axios.get('https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/FadedOffTheHenny', {headers})
// Retrieve SummonerID with res.data.id


// Grabbing the current league standings based off of the encrypted summoner ID (id)
/*
axios.get('https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/1qfaLCPh9y_yDpWA_8A2H9I3fG4Cf-HpGAJoEiSDXWk4KoA', {headers})
    .then(res => console.log(res.data))
    */


let url1 = 'https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/FadedOffTheHenny'
let url2 = 'https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/1qfaLCPh9y_yDpWA_8A2H9I3fG4Cf-HpGAJoEiSDXWk4KoA'

//const buildPath = path.resolve()

//app.use(express.static())

app.get('*', (req, res, next) => {
    res.sendFile()
})

FileWriter.writeTftFile()

// app.listen(3000)