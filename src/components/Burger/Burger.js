import React from 'react'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css'
import { object } from 'prop-types'

const burger = (props) => { //transform object of key value pair into array of burger ingredients
    let trasnformedIngredients = Object.keys(props.ingredients)  //gives array of keys
        .map(igKey => {  //executes the function on each element in their input array
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key = {igKey +1} type = {igKey} />
            })
        })   
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(trasnformedIngredients.length === 0){    
        trasnformedIngredients = <p>Please start adding ingredients!</p>
    }
        
    console.log(trasnformedIngredients)
        return(
        <div className='Burger'>
            <BurgerIngredient type="bread-top"/>
            {trasnformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger