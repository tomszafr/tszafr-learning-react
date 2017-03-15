import React from "react";

let Home = React.createClass({
  handleSave: function() {
    this.props.onSaveText(this._textarea.value)
  },
  componentDidMount: function() {
    this._textarea.value = this.props.textContent
  },
  render: function() {
    let textareaStyle = {
      width: '100%',
      height: '300px'
    }
    return (
      <div>
        <textarea style={textareaStyle} ref={(el) => this._textarea = el}>
        </textarea>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
});

export default Home
