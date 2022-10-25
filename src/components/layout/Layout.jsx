import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../../routers/Routers'
import Shop from '../../pages/Shop'

// import { Routes, Route, link } from 'react-router-dom'



const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />


        {/* <Routes>
            <Route path='/shop' element={Shop} />
        </Routes> */}
            
        </>
    )
}

export default Layout;