import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAPI } from './actions/fetchActions'

class RecommendButtons extends Component {
    render() {
      if (this.props.duplicate === false) return(null)

      let cityInput = this.props.cityname.charAt(0).toUpperCase() + this.props.cityname.substring(1);
      
      return(
        <div className="is-centered has-text-centered">
        <p>Please select a city</p>
        <div className="buttons is-centered">
        {Object.keys(this.props.recommendations).map((country) => (
          <button key={`${country}_button`} className="button" 
            onClick={() => this.props.fetchAPI(this.props.recommendations[country])}>
          {cityInput}, {country}
          </button>
        ))}
        </div>
        <br/>
        </div>
      )
    }
  }

const mapStateToProps = state => ({
    recommendations: state.checkCity.recommendations,
    cityname: state.checkCity.cityname,
    duplicate: state.checkCity.duplicate
  })

export default connect(mapStateToProps, { fetchAPI })(RecommendButtons);

