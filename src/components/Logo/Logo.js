import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';


const Logo = () => {
    return (
        <div className= 'ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner"> <img alt='Logo' src={brain} /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;