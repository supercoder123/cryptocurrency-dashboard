import React from 'react';
const crypto = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites.bind(this)
        }
        this.fetchCoins = this.fetchCoins.bind(this);
    }
    
    componentDidMount(){
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinListResponse = (await crypto.coinList());
        let coinList = coinListResponse.Data;
        this.setState({coinList});
        console.log(this.state.coinList);
    }

    confirmFavorites(){
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'Hello'
        }))
    }

    savedSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if(!cryptoDashData){
            return {page: 'settings', firstVisit: true};
        }
        return {};
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