import React from 'react';

class ChooseOneFromMany extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      inputType: props.InputType
    }
  }

  componentDidMount () {
    if (this.state.inputType !== 'radio' && this.props.inputType !== 'dropDown'){
      this.setState({inputType: 'dropDown'});
      console.log(this.state.inputType)
    }
  }


  render (){
    return (
      <div>
        <label>{this.props.category}</label>
        <select type={this.props.inputType}>
          {this.props.options.map((post) =>
            <option key={post}>
              {post}
            </option>
          )}
        </select>
      </div>
    );
  }
}

export default ChooseOneFromMany;
