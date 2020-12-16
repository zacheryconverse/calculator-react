import React, { Component } from 'react';
import './ClearButton.css';

class Clear extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleClear()} className='clear-btn'>
        Clear
      </div>
    )
  }
}

export default Clear;