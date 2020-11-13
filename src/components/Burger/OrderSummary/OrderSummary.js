import React from 'react'
import Oux from '../../../hoc/Oux'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })    
    return (
        <Oux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>     
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to check out?</p>
            <button btnType='Danger' clicked={props.purchasedCancelled}>CANCEL</button>
            <button btnType='Success' clicked={props.purchasedContinued}>CONTINUE</button>
        </Oux>
    )
}

export default orderSummary