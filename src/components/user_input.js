import React, { Component } from 'react';

class UserInput extends Component {
    constructor(props) {
        super(props);

        this.state = { contents: '' };
    }

    render() {
        return (
            <div>
                <textarea className="input"
                    value={this.state.contents}
                    onChange={event => this.onInputChange(event.target.value)}
                    rows="20" cols="50"
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({contents: term});
        this.props.onUserInput(term);
    }

}

export default UserInput;
