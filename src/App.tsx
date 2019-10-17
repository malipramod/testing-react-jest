import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {  
  return (
    <div className="App">
      Hello from App
      
    </div>
  );
}

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export default App;
