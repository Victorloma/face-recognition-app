import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2">
            <div className="pa3 " style={{ height: '300px', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{height: '200px', width: '200px', paddingTop: '5px'}} 
                src={brain} 
                alt='brain logo'
                />
            </div>
            </Tilt>
        </div>
    );
}

export default Logo;
