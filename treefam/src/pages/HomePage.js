import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../styles/Homepage/Homepage.css'
// import Firebase from '../firebase'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
// import treeIcon from '@iconify/icons-mdi/tree';

function Map ({ changeRoute, location, zoomLevel, userData, plantTree }) {
    const { username, points } = userData;

    return (
        <div className="map">
            <div className="sidepane">
                <h4>TreeFam</h4>
                <div className="user-options">
                    <h6>{username} | {points} Points</h6>
                    <p>Plant more trees to increase your points</p>
                    <button onClick={() => plantTree(points)}>
                        Plant a tree!
                    </button>
                    <button style={logoutButtonStyle} onClick={() => changeRoute("login")}>
                        Logout!
                    </button>
                </div>
            </div>
    
            <div className="google-map">
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAYnDuTTm9aZ7v2NV0hFtUwIoLb3S8WLvc' }}
                defaultCenter={ location }
                defaultZoom={ zoomLevel }
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={points}
                        name={username}
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}

const LocationPin = ({ text, name }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{name}<br/>{text} Points</p>
    </div>
)

const logoutButtonStyle = {
    backgroundColor: '#f16d56',
}

export default Map;
