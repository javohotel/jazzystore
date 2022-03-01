import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payments from '../containers/Payments';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/checkout/information' element={<Information />} />
                        <Route path='/checkout/payments' element={<Payments />} />
                        <Route path='/checkout/success' element={<Success />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;