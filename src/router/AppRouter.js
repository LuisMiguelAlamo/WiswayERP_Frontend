import React from 'react'
import { Routes, Route, BrowserRouter, NavLink, } from 'react-router-dom'
import { Customers } from '../components/pages/Customers'
import { Items } from '../components/pages/Items'
import { Aside } from '../components/layout/Aside'
import { CustomerCard } from '../components/layout/CustomerCard'
import { Footer } from '../components/layout/Footer'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Purchases } from '../components/pages/Purchases'
import { Sales } from '../components/pages/Sales'
import { Vendors } from '../components/pages/Vendors'
import { AddCustomerPage } from '../components/layout/AddCustomerPage'

export const AppRouter = () => {
    return (
        <BrowserRouter>

            {/* Header y navegación*/}
            <HeaderNav></HeaderNav>

            {/* Contenido central */}
            <div className='content'>

                <Routes>
                    <Route path='/customers' element={<Customers></Customers>}></Route>
                    <Route path='/items' element={<Items></Items>}></Route>
                    <Route path='/sales' element={<Sales></Sales>}></Route>
                    <Route path='/vendors' element={<Vendors></Vendors>}></Route>
                    <Route path='/purchases' element={<Purchases></Purchases>}></Route>
                    <Route path='/purchases' element={<Purchases></Purchases>}></Route>
                    <Route path='/customer/:id' element={<CustomerCard></CustomerCard>}></Route>
                    <Route path='/addCustomer/' element={<AddCustomerPage></AddCustomerPage>}></Route>
                </Routes>
            </div>

            {/* Aside */}
            {/* <Aside></Aside> */}

            {/* Footer */}
            <Footer></Footer>

        </BrowserRouter>
    )
}
