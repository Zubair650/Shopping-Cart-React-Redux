// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './store.jsx';
import { Provider } from 'react-redux';
import EditProducts from './EditProducts/EditProducts.jsx';
import AddProducts from './AddProducts/AddProducts.jsx';
import AllProducts from './AllProducts/AllProducts.jsx';
import Ordered_Products from './Ordered_Products/Ordered_Products.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/AddProducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/Ordered_Products',
        element: <Ordered_Products></Ordered_Products>
      },
      {
        path: '/EditProducts',
        element: <EditProducts></EditProducts>
      }
    ]
  }])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
