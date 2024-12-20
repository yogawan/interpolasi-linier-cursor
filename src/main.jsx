import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/utilities/App';
import HomePage from './components/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/test',
    element: <App></App>
  },
  {
    path: '/',
    element: <HomePage></HomePage>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);