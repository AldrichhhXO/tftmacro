import React from 'react'
import TftPageLayout from '../../../Layout/TftPageLayout'
import GridLayout from '../../../Layout/GridLayout'
import traits from '../../../static/Teamfight Tactics/TFT.json'
import TraitCard from '../../../Components/TFT/TraitCard'


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
    let traitsArray = traits.setData[2].traits




    let traitCards = traitsArray.map((trait,index) => {
        let effectsArray = trait.effects
        



        let tester = effectsArray.map((effect) => {

            // Object.values(effect.variables) // Returns an array of the values of each trait (1 Dimensional)
            console.log(Object.values(effect.variables))
            //console.log(`Min: ${effect.minUnits} , Bonus: ${effect.variables}`)
            return Object.values(effect.variables)
        })

        let minUnitsArray = effectsArray.map((yee) => {
            // console.log(yee.maxUnits)
            return yee.minUnits
        })
        //console.log(minUnitsArray)

        return (<TraitCard key = {index} traitName = {trait.name} traitDesc = {trait.desc} minUnits = { minUnitsArray } traitValues = { tester } />)
    })

    return (
        <TftPageLayout>
            <GridLayout>
                { traitCards }
            </GridLayout>
        </TftPageLayout>
    )
}
