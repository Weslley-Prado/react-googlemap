import React, { useState } from 'react'
import './MapComponent'
import MapComponent from './MapComponent';
import './Input.css'



class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lgn:''
    };

    this.handleChangeLgn = this.handleChangeLgn.bind(this);

    this.handleChangeLat = this.handleChangeLat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLat(event) {
    this.setState({ lat: event.target.value });
  }

  handleChangeLgn(event) {
    this.setState({ lgn: event.target.value });
  }

  handleSubmit(event) {
    console.log( 'Latitude: ' + this.state.lat );
    console.log("Longitude" +this.state.lgn)
    event.preventDefault();
  }

  render() {
    return (
      <div>
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Latitude:
          <textarea value={this.state.lat} onChange={this.handleChangeLat} />

        </label>

        <label>
          Longitude:
          <textarea value={this.state.lgn} onChange={this.handleChangeLgn} />

        </label>
        <input type="submit" value="Enviar" />
      </form>
      <MapComponent  />

      </div>      
    );
  }
}

export default Form;