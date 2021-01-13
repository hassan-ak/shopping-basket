// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/Header';
import { Home } from './components/Home';
import Footer from './components/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
