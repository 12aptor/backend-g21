import React from 'react'
import SearchPopup from '../components/SearchPopup'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends React.Component {
    render(){
        return(
            <>
                <div className="body-overlay" id="body-overlay"></div>
                <SearchPopup/>
                <Header/>
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
                <Footer/>
                
            </>
        )
    }
}

export default Home