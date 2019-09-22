import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Tweets from './Tweets';

export default class UserPage extends Component{
    render() {
        const { searchText, handleSearchChange, rets } = this.props;
        return (
             <div>
                <h1>Please input a name</h1>
                <SearchBar 
                    searchText={searchText}
                    handleSearchChange={handleSearchChange}
                />
                <Tweets rets={rets}/>
             </div>
        );
    }
}