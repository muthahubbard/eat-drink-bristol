import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from './Map';

import logo from './logo.svg';
import './App.css';


class App extends Component {


  render() {

    // store.subscribe(() => {
    //   console.log('store changed');
    //   console.log(store.getState());
    // });

    // store.dispatch({ type: 'DO_SOMETHING', payload: 'hello' });
    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Map data={this.props.markers} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    markers: state.markers
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterData: () => {
      dispatch({
        type: 'DO_SOMETHING',
        payload: ''
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


