import './App.css';
import React, { createContext, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navigation from './components/Navigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Cards from './Pages/Cards';
import Buttons from './Pages/Buttons';
import Dashboard from "./Pages/Dashboard";
import Grids from './Pages/Grids';
import SearchBar from './Pages/Search';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
 
  const [ theme, setTheme ] = useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setTheme((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
    [theme],
  );
  
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={appTheme}>
          <Navigation>
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/cards' element={<Cards />}/>
              <Route path='/grids' element={<Grids />}/>
              <Route path='/buttons' element={<Buttons />}/>
              <Route path='/search' element={<SearchBar />}/>
            </Routes>
          </Navigation>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
