import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "20rem",
      height: "13rem",
      position: "fixed",
      top: "0",
      left: "1.7rem",
      bottom: "1rem",
    };

    return (
      <div className="mapContainer">
        <Map
          google={this.props.google}
          zoom={2}
          mapTypeControl={false}
          streetViewControl={false}
          fullscreenControl={false} 
          style={mapStyles}
          initialCenter={this.props.coordinates}
        >
          <Marker position={this.props.coordinates} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDc5Sk2qRCnrAHrWPwDt25MxCs4KFDXLhw"
})(MapContainer);
