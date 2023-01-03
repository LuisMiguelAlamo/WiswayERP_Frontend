import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
    return (
        <div className='h-75'>


            <nav className="navbar navbar-expand-lg navbar-light bg-light h-75">
                <h1 className="navbar-brand mx-5" href="#">Wisway ERP</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto separate-nav">
                        <li className="nav-item">
                            <NavLink to="/customers" className="nav-link">Customers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/items" className="nav-link">Items</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/sales" className="nav-link">Sales</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/vendors" className="nav-link">Vendors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/purchases" className="nav-link">Purchases</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 display-row">
                        <input className="form-control mr-sm-2 rm-12" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>



        </div>

    )
}
