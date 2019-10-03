import React, { Component } from 'react';
import { connect } from 'react-redux'

class Summary extends Component {
    render() {
      if (this.props.cityname === '') return (null)

      let header = `Current Weather in ${this.props.cityname}, ${this.props.country}`
      return (
        <div>
          <p className="is-size-4 has-text-weight-semibold">{header}</p>
          <br/>
          <p className="is-size-3">
            {parseFloat(this.props.currentTemp).toFixed(1)}°C</p>
          <br/>
          </div>
  
      );
    }
  }

const mapStateToProps = state => ({

    cityname: state.fetch.cityname,
    country: state.fetch.country,
    currentTemp: state.fetch.currentTemp,
    
})

export default connect(mapStateToProps, null)(Summary);
