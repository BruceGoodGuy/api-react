import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path:'/', exact:true, main: () => <HomePage/>
    },
    {
        path:'/product', exact:true, main: () => <ProductListPage/>
    },
    {
        path:'/product/add', exact:true, main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path:'', exact: false, main: () => <NotFoundPage/>
    }
]

export default routes;