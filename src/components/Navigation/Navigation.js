import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn) {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end', border:'1px solid #000' }}>
                    <p onClick={() => onRouteChange('signout')} className='f4 mr2 link dim black underline pointer'> Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav style={{display: 'flex', justifyContent: 'flex-end', border:'1px solid #000' }}>
                    <p onClick={() => onRouteChange('signin')} className='f4 p2 mr2 link dim black underline pointer'> Sign In</p>
                    <p onClick={() => onRouteChange('Register')} className='f4 p1 mr2 link dim black underline pointer'> Register</p>
                </nav>
            );
        }
        
    
}

export default Navigation;