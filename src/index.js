import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import marked from 'marked';

import UserInput from './components/user_input';
import MarkDown from './components/markdown_export';

import './style/index.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: marked('## <-- Enter some markdown')}
    }

    createMarkdown(term) {
        this.setState({ contents: marked(term) });
    }

    render() {
        return (
            <div>
                <h1>Markdown Converter!</h1>
                <UserInput onUserInput={term => this.createMarkdown(term)} />
                <MarkDown content={this.state.contents} />
                <div className="bottom">For more information on markdown format, <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">click here</a></div>
            </div>
        );
    }
};

ReactDOM.render(
    <App />
    , document.querySelector('.container'));
