import React from 'react';

class Input extends React.Component {
  constructor(){
    super();

  }
  render () {
    return <input placeholder={this.props.placeholder}/>
  }
}
export default Input;
