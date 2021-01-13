// Imports
// React Imports
import React from 'react';
// Component Imports
import Header from './components/Header';
import { Home } from './components/Home';
import About from './components/About';
import { Store } from './components/Store';
import Footer from './components/Footer';
// Styles Imports
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="">
        <Home />
        <About />
        <Store />
      </div>
      <Footer />
    </div>
  );
}

export default App;
