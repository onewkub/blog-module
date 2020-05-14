import React from 'react'
import './markdown-editor.css'

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.ReactMarkdown = require('react-markdown')
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="editor">
                    <h2>Editor</h2>
                    <form onSubmit={this.handleSubmit}>
                        <textarea rows="10" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="preview">
                    <h2>Preview</h2>
                    <this.ReactMarkdown escapeHtml={false} rawSourcePos={true} source={this.state.value} />
                </div>
            </div>

        );
    }
}

export default Editor