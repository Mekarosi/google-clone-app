import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Routes } from './components/Routes';
import { Footer } from './components/Footer';

import './styles/theme.css'
import './App.css';

const App = () => {
  
  const [darkTheme, setDarkTheme] = useState('false');
  return (
    <div className={`App ${darkTheme ? 'dark' : 'light'}` }>
        <h1>Welcome to gogle</h1>
    </div>
  );
}

export default App;
