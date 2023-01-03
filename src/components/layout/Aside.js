import React from 'react'
import { NavLink } from 'react-router-dom'


export const Aside = () => {
    return (
        <aside className='aside'>
            <nav>
                <h1>ERP Wisway, the best way</h1>
                <ul>
                    <li>
                        <NavLink to="/customers">Customers</NavLink>
                        <NavLink to="/items">Items</NavLink>
                        <NavLink to="/sales">Sales</NavLink>
                        <NavLink to="/vendors">Vendors</NavLink>
                        <NavLink to="/purchases">Purchases</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}
