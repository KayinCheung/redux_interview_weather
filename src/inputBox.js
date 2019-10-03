import React, { Component } from 'react';
import { connect } from 'react-redux'
import { checkValidCity } from './actions/checkValidCityActions'

class InputBox extends Component {
    render() {
      return (
        <nav className="level">
          <div className="level-item">
            <div className="field has-addons">
              <p className="control">
                <input className="input is-fullwidth" type="text" placeholder="Input a city" id="inputCityText"
                   onKeyPress={(e) => {
                     if (e.key === "Enter"){
                        this.props.checkValidCity(
                            (document.getElementById("inputCityText").value).toLowerCase()
                        )
                     }}}/>
              </p>
              <p className="control">
                <button className="button" id="inputCityBtn" onClick={() =>{
                    this.props.checkValidCity(
                        (document.getElementById("inputCityText").value).toLowerCase()
                    )
                }}>
                  Search
                </button>
              </p>
            </div>
        </div>
      </nav>
       
      );
    }
  }

 
export default connect(null, { checkValidCity })(InputBox);

