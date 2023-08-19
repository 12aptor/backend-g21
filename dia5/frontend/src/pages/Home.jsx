import React from 'react'
import SearchPopup from '../components/SearchPopup'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            platos : [
                {
                    'nombre':'POLLO A LA BRASA',
                    'imagen':'https://img1.freepng.es/20180601/wjk/kisspng-pollo-a-la-brasa-roast-chicken-peruvian-cuisine-fr-5b1191771c65a7.0442864615278780071163.jpg',
                    'precio':'100'
                },
                {
                    'nombre':'PIZZA AMERICANA',
                    'imagen':'https://realplaza.vtexassets.com/arquivos/ids/20631630/image-18518f11bed241b59b5cbacd02a5051f.jpg',
                    'precio':'150'
                }
            ]
        }
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