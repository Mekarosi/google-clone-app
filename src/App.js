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
       <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
       <Routes />
       <Footer />
    </div>
  );
}

export default App;
