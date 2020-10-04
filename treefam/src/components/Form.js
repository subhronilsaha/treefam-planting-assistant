import React, { useState, useEffect } from 'react';
import Firebase from '../firebase';
import './Form.css';

const storeData = (name, email, lat, lng) => {
    const userData = {
        name: name, 
        email: email,
        lat: lat,
        lng: lng,
        points: 0
    }
    Firebase.database().ref('/users').child(name).set(userData);
}

export default function Form ({ changeRoute }) {
    const [email, setEmail] = useState("");
    const [firstname, setfirstname] = useState("");
    const [latitude, setlatitude] = useState(90);
    const [longitude, setlongitude] = useState(90);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setlatitude(position.coords.latitude);
            setlongitude(position.coords.longitude);
        });
    })
    
    return (
        <div class="row">
            <h3>Login</h3>

            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input 
                            id="first_name" 
                            type="text" 
                            class="validate"
                            onChange={e => {setfirstname(e.target.value); console.log(firstname);}}
                        />
                        <label for="first_name">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <input 
                            id="last_name" 
                            type="text" 
                            class="validate" 
                        />
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input 
                            id="email" 
                            type="email" 
                            class="validate" 
                            onChange={e => {setEmail(e.target.value); console.log(email);}}
                        />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate" />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div>
                    <label>
                        <input type="checkbox" />
                        <span>Allow location access</span>
                    </label>
                </div>
            </form>

            <button 
                onClick = {() => {
                    storeData(firstname, email, latitude, longitude);
                    changeRoute("logged in", email, firstname, latitude, longitude);
                }}
            >
                <h5>Login</h5>
            </button>
        </div>
    );
}
