import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    screen: ''
  }

  render() {
    return (
      <div className='widget'>
        <div className='screen'></div>
        <button className='symbol'>%</button>
        <button className='symbol'>÷</button>
        <button className='symbol'>x</button>
        <button className='symbol'>-</button>
        <button className='number'>7</button>
        <button className='number'>8</button>
        <button className='number'>9</button>
        <button className="two-rows symbol">+</button>
        <button className='number'>4</button>
        <button className='number'>5</button>
        <button className='number'>6</button>
        <button className='number'>1</button>
        <button className='number'>2</button>
        <button className='number'>3</button>
        <button className="two-rows equals">=</button>
        <button className="two-columns number">0</button>
        <button className='number'>.</button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));