const ProductCard = ({ product }) => {
    const { image, name, id, price, description} = product

    return (
        <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src={image} alt=""/>
                              </a>
                              <div className="prod-i-actions">
                                <div className="prod-i-actions-in">
                                  <div className="prod-li-favorites">
                                    <a href="wishlist.html" className="hover-label add_to_wishlist"><i className="icon ion-heart"></i><span>Add to Wishlist</span></a>
                                  </div>
                                  <p className="prod-quickview">
                                    <a href="#" className="hover-label quick-view"><i className="icon ion-plus"></i><span>Quick View</span></a>
                                  </p>
                                  <p className="prod-i-cart">
                                    <a href="#" className="hover-label prod-addbtn"><i className="icon ion-android-cart"></i><span>Add to Cart</span></a>
                                  </p>
                                  <p className="prod-li-compare">
                                    <a href="compare.html" className="hover-label prod-li-compare-btn"><span>Compare</span><i className="icon ion-arrow-swap"></i></a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="prod-i-bot">
                              <div className="prod-i-info">
                                <p className="prod-i-price">$ {price}</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">{name}</a></h3>
                            </div>
                          </div>
                        </article>
    )
}

export default ProductCard