import React from 'react'
import SearchPopup from '../components/SearchPopup'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PlatoService from '../services/Plato.service'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            platos : []
        }
    }

    componentDidMount(){
        PlatoService.getAll().then(
            (res)=>{
                console.log(res)
                this.setState({
                    platos:res
                })
            }
        )
    }
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
                        <div className="row justify-content-center">
                                {this.state.platos.map(prod=>{
                                    return(
                                        <>
                                        <div className="col-lg-6">
                                            <div className="single-item-wrap style-2">
                                                <div className="media">
                                                    <div className="thumb">
                                                        <img src={prod.imagen} alt="img"/>
                                                    </div>
                                                    <div className="wrap-details">
                                                        <h5><a href="single-product.html">{prod.nombre}</a></h5>
                                                        <div className="wrap-footer">
                                                            <h6 className="price">{prod.precio}</h6>
                                                            <button type="submit" className="btn btn-secondary">ADD TO CART</button>
                                                        </div>                            
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )
                                    })
                                }
                        </div>
                    </div>
                </section>
                <Footer/>
                
            </>
        )
    }
}

export default Home