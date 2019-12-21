import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

// function Map() {
//     return (
//         <GoogleMap 
//             defaultZoom={ 10 } 
//             defaultCenter={ { lat: 40.633125, lng:-89.398529 } }
//         />
//     );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

class Maps extends Component {
    state = {  }
    render() { 
        return ( 
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

const mapStyles = {
    width: '100%',
    height: '100%',
};
 
export default GoogleApiWrapper({
    apiKey: 'THERE WAS AN API KEY HERE BUT I REMOVED IT FOR NOW'
  })(Maps);

// function Google() {
//     return (
//         <div>
//             <WrappedMap 
//                 googleMapUrl={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}>
//                 loadingElement={<div style={ { height: "100%" } } />}
//                 containerElement={<div style={ { height: "100%" } } />}
//                 mapElement={<div style={ { height: "100%" } } />}
//             </WrappedMap> 
//         </div>  
//     ) 
// };
