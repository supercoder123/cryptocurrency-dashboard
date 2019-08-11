import React from 'react';
import './App.css';
import styled, {css} from 'styled-components';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div>
      <WelcomeMessage name='cryptodash' />
    </div>
    
  );
}

export default App;
