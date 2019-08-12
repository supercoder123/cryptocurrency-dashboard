import React from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import Settings from '../settings';
import {AppProvider} from './AppProvider';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar></AppBar>
        <Settings />
      </AppProvider>
    </AppLayout>
    
  );
}

export default App;
