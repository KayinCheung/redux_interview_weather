import React, { Component } from 'react';
import constant from './Constant.js'

import { connect } from 'react-redux'
import { handleDateSelection } from './actions/dateSelectionAction'

class DailyRowData extends Component {
    render() {
      
      let data = this.props.dailyData
      if (Object.keys(data).length === 0) return (null)
      
      return (
        <div>
          <hr/>
            <nav className="level">
        
            {Object.keys(data).map((date, i) => (
              
                <div key={`daily${date}`} className="level-item has-text-centered clickableBox paddedBox" 
                onClick={()=>{this.props.handleDateSelection(date)}}>
                <div>
                
                <p className="is-size-4">
                    {constant.month_map[parseInt(date.split("-")[1])]}
                    &nbsp;{parseInt(date.split("-")[2])}
                </p>
                <img src={`https://openweathermap.org/img/wn/${data[date]["icon"]}@2x.png`} width="50px" height="50px" alt="icon"/>
                <br/>
        
                {parseFloat(data[date]["temp_min"]).toFixed(1)} - {parseFloat(data[date]["temp_max"]).toFixed(1)}°C<br/>
        
                {(data[date]["weather"])}<br/>
        
                Wind: {(data[date]["wind_max"])}m/s
                
                </div>
                </div>
            ))}
            
            </nav>
        <hr/>
      </div>
        
      );
    }
  }


const mapStateToProps = state => ({
  dailyData: state.fetch.dailyData,

})

export default connect(mapStateToProps, {handleDateSelection})(DailyRowData);