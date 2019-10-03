import React, { Component } from 'react';
import { connect } from 'react-redux'
class ThreeHrTable extends Component {

    render() {

      if (Object.keys(this.props.threeHrData).length === 0) return (null)

      let data
      let firstkey = Object.keys(this.props.threeHrData)[0]
      let date = this.props.date
      if (date === ''){
        data = this.props.threeHrData[firstkey]
      } else {
        data = this.props.threeHrData[date]
      }
 
      return (
        data.map(function(row,i){
          let time = (row["time"])
  
        return(
       
          <article className="media" key={time}>
            <figure className="media-left">
              <p className="image is-64x64">
              <img src={`https://openweathermap.org/img/wn/${row["icon"]}@2x.png`} width="50px" height="50px"/>
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                
                  <strong>{time}</strong>&nbsp;&nbsp;
                  -&nbsp;&nbsp;
                  {row["weather"]}
                  <br/>
                  
                  <p className="button is-small">{parseFloat(row["temp_min"]).toFixed(1)}°C</p>
                  &nbsp;&nbsp;-&nbsp;&nbsp;
                  <p className="button is-small">{parseFloat(row["temp_max"]).toFixed(1)}°C</p><br/>
                  <p>Wind: {row["wind"]}m/s</p>
                
              </div>
            </div>
          </article>
         
        )})
      );
    }
  }



const mapStateToProps = state => ({
  threeHrData: state.fetch.threeHrData,
  date: state.dateSelection.date
})

export default connect(mapStateToProps, {})(ThreeHrTable);