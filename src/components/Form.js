import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import ChooseOneFromMany from './ChooseOneFromMany';
//  Dropdown || Radio;
// import LongText from './LongText';
// import MultiSelect from './LongText';


// TODO: create a more dynamic
// form that will
// populate with the type & order
// of input entry types

class Form extends React.Component {
  constructor (props) {
    super();
    //this is not allowed before super
    this.state = {};
  }

  render () {
    return (
      <form>
        <Input placeholder={'Hi There'}/>
        <Checkbox optVal={'continue'} optText={'Check for consent'}/>
        <ChooseOneFromMany category="animal" options={['tree', 'dog', 'cat']}/>
      </form>
    );
  }
}

export default Form;
