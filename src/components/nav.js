import React from 'react';
import {CustomNav} from './helper'

const Nav = props => {
    return (
        <nav style={props.style}>
            <ul className="tabs padding-bottom-medium">
                <CustomNav to='/' label='Home' generalClassName="tab-title" activeOnlyWhenExact={true} />
                <CustomNav to='/favorites' label='Favorites' generalClassName="tab-title" activeOnlyWhenExact={true} />
            </ul>
        </nav>
    )
}

export default Nav;