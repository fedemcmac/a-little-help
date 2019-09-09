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
          initialCenter={{ lat: 0.444, lng: -122.176 }}
        >
          <Marker position={{ lat: 0.444, lng: -122.176 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBXeYeK0B17E6WXZ0hrS8AW8raBq_wwYws"
})(MapContainer);
