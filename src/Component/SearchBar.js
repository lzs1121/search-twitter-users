import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input
                    size='large'
                    type='text'
                    value={this.props.searchText}
                    onChange={this.props.handleSearchChange}
                />
            </div>
        );
    }
}