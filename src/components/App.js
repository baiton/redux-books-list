import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="">
                <h1 className="jumbotron books-header text-light">Books N' Roses: Appetite for Instruction</h1>
                <div className="row d-flex justify-content-start ml-3">
                <BookList/>
                <BookDetail/>
                </div>
            </div>
        );
    }
}

export default App;
