import React from 'react';
import Form from '../components/Form';
import { Spring } from 'react-spring/renderprops';
import '../styles/Homepage/LoginPage.css';

export default function LoginPage({ changeRoute }) {
    return (
        <Spring
            from = {{ opacity: 0 }}
            to = {{ opacity: 1 }}
            config = {{ duration: 500, delay: 1000 }}
        >
           {props => (
               <div style = {props}>
                   <div className="home">
                        <div className="info-sect">
                            <h1>TreeFam</h1>
                            <h3>Plant trees, get Climate points and compete with friends! </h3>
                        </div>
                        <div className="auth-container">
                            <div>
                                <Form changeRoute = {changeRoute} />
                            </div>
                        </div>
                    </div>
               </div>
           )} 
        </Spring>
    )  
}
