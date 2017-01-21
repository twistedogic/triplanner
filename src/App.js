import React, {Component} from 'react';
import {render} from 'react-dom';
import Map from './component/Map'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.css'

class App extends Component{
  render(){
    return (
      <div style={{height:'100%'}}>
        <Map />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
