import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Library from './Components/Library';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
    <Route index element={<App/>}/>
    <Route path='/library' element={<Library/>} />
    <Route path='/home' element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

