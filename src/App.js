import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let defaultStyle = {
  color: 'white',
}

class Aggregate extends Component{
  render(){
    return(
    <div className = 'aggregate' style = {{...defaultStyle, width:'40%', display:'inline-block'}}>
<h2 style = {{'color':'red'}}>Number and  Text</h2>
</div>
)
  }
};

class Filter extends Component {
  render(){
    return (
      <div>
        <input type = 'text' />
      </div>
    )
  }
}

class Playlist extends Component{
  render(){
    return(
<div style = {{...defaultStyle,'display':'inline-block', 'width': '25%'}}>
<img />
<h3> Playlist name</h3>
<ul><li>Song 1</li><li>Song 2 </li> <li>Song 3</li></ul>
</div>
    );
  }
};

class App extends Component {
  render() {
    let title = 'Splotify';
    return (
      <div className="App">
<h1 style = {{  "color": "green", "size": "54px"}}>{title}</h1>
<Aggregate/>
<Aggregate/>
<Filter/>
<Playlist/>
<Playlist/>
<Playlist/>
<Playlist/>
      </div>
    );
  }
}

export default App;
