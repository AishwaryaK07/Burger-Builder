import React from 'react';
import Oux from '../../hoc/Oux'
import './Layout.css'

const layout = (props) => (
    <Oux>
        <div>Toolbar, Sidebar, Backdrop</div>
        <main className='Content'>
            {props.children}
        </main>
    </Oux>
);

export default layout; 