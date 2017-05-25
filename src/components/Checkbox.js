import React from 'react';

class Checkbox extends React.Component {
  constructor (props) {
    super();
  }

  render () {
    return (
      <div>
        <input type="checkbox" id={this.props.optVal} name={this.props.optVal} value={this.props.optVal}/>
        <label for={this.props.optVal}>{this.props.optText}</label>
      </div>
    );
  }
}

export default Checkbox;
