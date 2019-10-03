import React, { Component } from 'react';
import './App.css';
import ThreeHrTable from './ThreeHrTable.js'
import DailyRowData from './DailyRowData.js'
import RecommendButtons from './RecommendButtons.js'
import InputBox from './inputBox.js'
import Summary from './summary.js'

import { connect } from 'react-redux'
import { fetchAPI } from './actions/fetchActions'

class Body extends Component {

  //Run API calls
  componentDidMount(){
    this.props.fetchAPI();
  }

  render(){

  return (
    <div>
      <section className="section">
      <div className="container is-centered" style={{flex: 1}}>
      <InputBox/>
      <p className="is-size-7 has-text-danger">{this.props.error}</p>
      <RecommendButtons/>
      <Summary/>
      <DailyRowData/>
      {this.props.date === '' ? null : <strong>Forecast for {this.props.date}</strong>}
      <ThreeHrTable/>
      </div>
      </section>
    </div>
  );
}
}

const mapStateToProps = state => ({
  data: state.fetch.data,
  threeHrData: state.fetch.threeHrData,
  dailyData: state.fetch.dailyData,
  recommendations: state.fetch.recommendations,
  cityname: state.fetch.cityname,

  date: state.dateSelection.date,

  error: state.checkCity.error
})

export default connect(mapStateToProps, { fetchAPI })(Body);
