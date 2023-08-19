import React from 'react'
import {Logo,IconEnvelope,IconLocation,IconPhone} from '../entryfiles/imagePath'

class Footer extends React.Component {

    render(){
        return(
            <>
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

export default Footer