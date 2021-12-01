import React from 'react'
import TftPageLayout from '../../../Layout/TftPageLayout'
import GridLayout from '../../../Layout/GridLayout'
import traits from '../../../static/Teamfight Tactics/TFT.json'
import TraitCard from '../../../Components/TraitCard/TraitCard'


/**
 * 
 * @returns Traits 
 * 
 * Reference to get information:
 * 
 * "traits.setData[2]": info on the set in this index (in this index it is set 6)
 * "traits.setData[2].champions": Champions of the set
 * 
 */

export default function Traits() {
    document.title = "Academy.GG | Traits and Classes"

    console.log(traits.setData[2].traits)
    let traitsArray = traits.setData[2].traits

    let traitCards = traitsArray.map((trait) => {



        return (<TraitCard key = {trait.apiName} traitName = {trait.name} traitDesc = {trait.desc} />)
    })

    return (
        <TftPageLayout>
            <GridLayout>
                { traitCards }
            </GridLayout>
        
        </TftPageLayout>
    )
}
