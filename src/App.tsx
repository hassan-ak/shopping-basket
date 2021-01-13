// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/Header';
import { Home } from './components/Home';
import About from './components/About';
import { Store } from './components/Store';
import { Gents } from './components/Gents';
import { Ladies } from './components/Ladies';
import { Contact } from './components/Contact';
import { ErrorPage } from './components/ErrorPage';
import Footer from './components/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="">
        <Home/>
        <About/>
        <Store/>
        <Gents/>
        <Ladies/>
        <Contact/>
        <ErrorPage/> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
