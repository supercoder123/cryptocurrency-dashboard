import React from 'react';
import {AppContext} from '../app/AppProvider';

export default function ({firstVisit}){
    return (
      <AppContext.Consumer>
        {
          ({firstVisit}) => firstVisit ? <div>Welcome to CryptoDash, please select your favorite coins</div> : null
        }
      </AppContext.Consumer>
      )
  }