//Libraries
import React from 'react';

// Style
import '../styles/components/header.scss'

const HeaderComponent = (props) => {
    return(
        <header className='navbar p-0 header'>
            <div className='container header__wrapper'>
                <div className="header__logo">
                    <div className="header__logo-wrapper">
                        <span className="header__logo-content">A.</span>
                    </div>
                </div>
                <div className='header__user'>
                    <div className="header__user-wrapper">
                        <span className="header__user-content">{props.user.username}</span>
                    </div>
                </div> 
            </div>
        </header>
    )
}


export default HeaderComponent