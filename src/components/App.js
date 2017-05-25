import React from 'react';
import Form from './Form';

class Counter extends React.Component {
  constructor () {
    super();
    this.state = {
      count: 0
    };
  }

  render () {
    return (
      <Form/>
    );
  }
}

export default Counter;
