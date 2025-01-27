import React from 'react'

import './header.scss'

import { logo } from '../../assets/images'

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="https://www.gtavice.net/whats-new" target="_blank">Overview</a></li>
                    <li><a href="https://www.gtavice.net/characters" target="_blank">Characters</a></li>
                    <li><a href="https://www.linkedin.com/in/onkar-shirke" target="_blank">About Us</a></li>
                    <li><a href="https://www.youtube.com/channel/UCPquqATHr1DaHDo_AmOvfjA" target="_blank">Support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
