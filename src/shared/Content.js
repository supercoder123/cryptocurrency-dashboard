import React from 'react';
import {AppContext} from '../app/AppProvider';

export default function ({children}){
    return (
        <AppContext.Consumer>
            {
                ({coinList}) => {
                    if(!coinList){
                        return <div>Loading Coins...</div>;
                    }
                    return <div>{children}</div>
                }
            }
        </AppContext.Consumer>
    )
}