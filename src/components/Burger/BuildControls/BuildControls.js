import React from 'react'
import './BuildControls.css'
import BuildContol from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type:'salad'},
    { label: 'Bacon', type:'bacon'},
    { label: 'Cheese', type:'cheese'},
    { label: 'Meat', type:'meat'},
];

const buildControls= (props) => (
    <div className='BuildContols'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cntrl => (
            <BuildContol 
                key={cntrl.label} 
                label={cntrl.label} 
                added={() => props.ingredientAdded(cntrl.type)}
                removed={() => props.ingredientRemoved(cntrl.type)} 
                disabled={props.disabled[cntrl.type]}/>
        ))}
        <button 
        className='OrderButton'
        disabled={!props.purchasable}>ORDER NOW</button>
    </div>
)

export default buildControls