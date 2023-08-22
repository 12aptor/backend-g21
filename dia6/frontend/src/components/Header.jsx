import React from 'react'
import {Logo} from '../entryfiles/imagePath'

class Header extends React.Component {

    render(){
        return(
            <>
            <header className="navbar-area">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container nav-container">
                            <div className="responsive-mobile-menu">
                                <button className="menu toggle-btn d-block d-lg-none" data-target="#themefie_main_menu"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-left"></span>
                                    <span className="icon-right"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse" id="themefie_main_menu">
                                <ul className="navbar-nav menu-open">
                                    <li>
                                        <a href="about.html">ABOUT US</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">CONTACTS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="logo">
                                <a className="main-logo" href="home-1.html">
                                    <img src={Logo} alt="img"/>
                                </a>
                            </div>
                            <div className="nav-right-part nav-right-part-mobile">
                                <ul>
                                    <li><a className="search" href="#"><i className="ri-search-line"></i></a>
                                    </li>
                                    <li className="phone-contact d-md-block d-none"><i className="ri-phone-fill float-start"></i>
                                        +997 509 153 849
                                    </li>
                                    <li className="menu-cart"><a href="cart.html">CART <span>1</span></a></li>
                                    <li>49.50 $</li>
                                </ul>
                            </div>
                            <div className="nav-right-part nav-right-part-desktop">
                                <ul>
                                    <li><a className="search" href="#"><i className="ri-search-line"></i></a>
                                    </li>
                                    <li className="phone-contact"><i className="ri-phone-fill float-start"></i>
                                        +997 509 153 849
                                    </li>
                                    <li className="menu-cart"><a href="cart.html">CART <span>1</span></a></li>
                                    <li>49.50 $</li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Header