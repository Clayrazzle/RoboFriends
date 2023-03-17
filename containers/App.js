import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from './robots.js';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
  constructor () {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {

    this.setState({ robots: robots });
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }


  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
    <div className='tc'>
      <h1 className = 'f1'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>

    );
  }
}

export default App;
