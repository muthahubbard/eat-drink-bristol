import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { filterByCuisine } from './actions/marker-actions';

import Map from './components/map/Map';
import MarkerList from './components/marker-list/marker-list';


import logo from './logo.svg';
import './App.css';
import './index.css';


class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.props.filterData}>Welcome to React</h2>
        </div>
        <main>
          <div className="map-list-wrapper">
          <Map data={this.props.markers} />
          <MarkerList data={this.props.markers} />
          </div>
        </main>
      </div>
    );
  }
}


// filter results based on cuisine and tags
const getVisibleMarkers = (markers, match) => {
  console.log(match.params.seoName);
  return markers;
};

const mapStateToProps = (state, { match }) => ({
  markers: getVisibleMarkers(state.markers, match)

});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filterData() {
    dispatch(filterByCuisine())
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));