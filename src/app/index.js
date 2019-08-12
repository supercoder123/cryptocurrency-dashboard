import React from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar';
import Settings from '../settings';
import {AppProvider} from './AppProvider';
import Content from '../shared/Content';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar></AppBar>
        <Content>
          <Settings />
        </Content>
      </AppProvider>
    </AppLayout>
    
  );
}

export default App;
