import React from 'react';
import _ from 'lodash';

import { tsImportEqualsDeclaration } from '@babel/types';
const crypto = require('cryptocompare');

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites.bind(this)
        }
        this.fetchCoins = this.fetchCoins.bind(this);
    }
    
    addCoin = key => {
        let favorites = [...this.state.favorites];
        if(favorites.length < MAX_FAVORITES){
            favorites.push(key);
            this.setState({favorites});
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({favorites: _.pull(favorites, key)})
    }

    componentDidMount(){
        this.fetchCoins();
        console.log(this.state);
        
    }

    fetchCoins = async () => {
        let coinListResponse = (await crypto.coinList());
        let coinList = coinListResponse.Data;
        this.setState({coinList});
        console.log(this.state.coinList);
    }

    isInFavorites = key => _.includes(this.state.favorites, key);

    confirmFavorites(){
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            favorites: this.state.favorites
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {page: 'settings', firstVisit: true};
        }
        let {favorites} = cryptoDashData;
        console.log(favorites);
        
        return {favorites};
    }

    setPage = page => this.setState({ page });

    render(){
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}