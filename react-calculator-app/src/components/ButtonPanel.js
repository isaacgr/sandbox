import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className='button_row'>
          <Button handleButtonClick={this.props.handleButtonClick} name='C'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='+/-'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='%'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='/'/>
        </div>
        <div className='button_row'>
          <Button handleButtonClick={this.props.handleButtonClick} name='7'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='8'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='9'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='x'/>
        </div>
        <div className='button_row'>
          <Button handleButtonClick={this.props.handleButtonClick} name='4'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='5'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='6'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='-'/>
        </div>
        <div className='button_row'>
          <Button handleButtonClick={this.props.handleButtonClick} name='1'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='2'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='3'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='+'/>
        </div>
        <div className='button_row'>
          <Button handleButtonClick={this.props.handleButtonClick} name='0'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='.'/>
          <Button handleButtonClick={this.props.handleButtonClick} name='='/>
        </div>
      </div>
    );
  };
};

export default ButtonPanel;
