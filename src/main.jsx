import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/utilities/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);