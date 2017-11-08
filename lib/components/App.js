import React from 'react';
import StateApi from '../state-api';
import ArticleList from './ArticleList'
import axios from 'axios'


class App extends React.Component {
    state = this.props.store.getState();

    render() {
        return ( <div>
            <ArticleList 
                articles = {this.state.articles}
                store = {this.props.store}/> 
            </div>
        );
    }
}

export default App;