import React from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout'

function App() {
  return (
    <AppLayout>
      <WelcomeMessage name='CryptoDash' />
    </AppLayout>
    
  );
}

export default App;
