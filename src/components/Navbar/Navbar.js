import React from 'react';
import styled from 'styled-components';
import './Navbar.css'

const Button = () => {
    return (

        <div className='navbar'>
            <button className="button">
                <div><span>EVENT</span></div>
            </button>
            <button className="button">
                <div><span>COMPETATIONS</span></div>
            </button>
            <button className="button">
                <div><span>ACCOMODATION</span></div>
            </button>
            <button className="button">
                <div><span>SCHEDULE</span></div>
            </button>
            <button className="button">
                <div><span>CONTACT  </span></div>
            </button>
            <button className="button">
                <div><span>REGISTER</span></div>
            </button>

        </div>


    );
}


export default Button;
