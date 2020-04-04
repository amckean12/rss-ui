import React, { Component } from 'react';

// Styles
import '../styles/components/header.scss'

class HeaderContainer extends Component {
    render(){
        return(
            <header className="navbar header">
                <div className="container">
                    <section className="header__logo">
                        <div className="header__logo-wrapper">
                            <span className="header__logo-display">A.</span>
                        </div>
                    </section> 
                    <section className="header__user-display">
                        <div className="header__user-display-wrapper">
                            <span className="header__username">ajmckean</span>
                        </div>
                    </section>
                </div>   
            </header>
        );
    }
}

export default HeaderContainer