import React from 'react'
import {Logo,IconEnvelope,IconLocation,IconPhone} from '../entryfiles/imagePath'

class Home extends React.Component {
    render(){
        return(
            <>
                <div className="body-overlay" id="body-overlay"></div>
                <div className="td-search-popup" id="td-search-popup">
                    <form action="index.html" className="search-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search....."/>
                        </div>
                        <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
                    </form>
                </div>
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
                <section className="populer-area pd-top-50 pd-bottom-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-8">

                            </div>
                        </div>
                        <div className="row justify-content-center" id="productos">

                        </div>
                    </div>
                </section>
                <footer className="footer-area pd-top-100">
                    <div className="footer-inner padding-top-100 padding-bottom-65">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget widget">
                                        <div className="logo">
                                            <img src={Logo} alt="img"/>
                                        </div>
                                        <ul className="contact_info_list">
                                            <li className="single-info-item">
                                                <img src={IconLocation} alt="icon"/>
                                                    <div className="details">
                                                        4920 Trails End Road Ft  United States, FL 33311
                                                    </div>
                                            </li>
                                            <li className="single-info-item">
                                                <img src={IconEnvelope} alt="icon"/>
                                                    <div className="details">
                                                        ordernow@foodka.com
                                                    </div>
                                            </li>
                                            <li className="single-info-item">
                                                <img src={IconPhone} alt="icon"/>
                                                    <div className="details">
                                                        +997 509 153 849
                                                    </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <div className="footer-widget widget widget_link">
                                        <h4 className="widget-title">Opening Hours</h4>
                                        <ul>
                                            <li>Monday : 09.00am-10.00pm</li>
                                            <li>Tuesday : 09.00am-10.00pm</li>
                                            <li>Wednesday : 09.00am-10.00pm</li>
                                            <li>Thursday : 09.00am-10.00pm</li>
                                            <li>Friday  : 09.00am-10.00pm</li>
                                            <li>Saturday & Sunday : <span>Closed</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Home