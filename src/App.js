import logo from './logo.svg';
import './App.css';
import ScrollIndicator from './components/scroll-indicator/scroll-indicator';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <ScrollIndicator
    url={'https://dummyjson.com/products?limit=100'}
    />
    </div>
  );
}


export default App;
