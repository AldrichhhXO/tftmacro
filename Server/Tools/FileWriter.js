const fs = require('fs')
// const traits = require('../assets/TFT/TFT_Items.json')
const axios = require('axios').default

async function retrieveSetFile() {
    let jsonFile = await axios.get('https://raw.communitydragon.org/latest/cdragon/tft/en_us.json')
    let championsPath = `${__dirname}/../Assets/TFT/Champions.json`
    let augmentsPath = `${__dirname}/../Assets/TFT/Augments.json`

    let itemsPath = `${__dirname}/../Assets/TFT/Items.json`
    let updatedItems = []
    let augments = []
    jsonFile.data.items.map((item) => {
        //console.log(item.icon)
        if (item.icon.includes('Augments')) augments.push(item)
        else if ( item.icon.includes('Standard') ) updatedItems.push(item)
        
    })
    fs.writeFileSync(itemsPath, JSON.stringify(updatedItems, null, 4))
    fs.writeFileSync(augmentsPath, JSON.stringify(augments, null, 4))
    //console.log(updatedItems)

    
    return
    // console.log(JSON.stringify(jsonFile.data.setData[2] ))
}


module.exports = {
    retrieveSetFile
}