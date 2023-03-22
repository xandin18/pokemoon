import React from 'react';
import { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './components/GlobalStyle';
import Home from './routes/Home';
import PokeApi from './routes/PokeApi';
import QuemFez from './routes/quemFez';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Router = createBrowserRouter([
      {
        path:"/",
        element:<App />,
        children:[
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"pokemon",
            element:<PokeApi />
          }
        ],
      },
      {
        path:"me",
        element:<QuemFez />
      }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router}/>
  </React.StrictMode>
);