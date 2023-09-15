
const SiteContent = () =>{
    return(
        <>
        <div id="content" className="site-content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <div className="cont maincont">

                <div className="section-top">

                  <h1 className="maincont-ttl">Shop</h1>
                  <ul className="b-crumbs">
                    <li><a href="index.html">Home</a></li>
                    <li>Catalog - Gallery</li>
                  </ul>
                  <div className="section-top-sort">
                    <div className="section-view">
                      <p>View</p>
                      <div className="dropdown-wrap">
                        <p className="dropdown-title section-view-ttl">Gallery</p>
                        <ul className="dropdown-list">
                          <li>
                            <a href="catalog-list.html">List</a>
                          </li>
                          <li className="active">
                            <a href="catalog-gallery.html">Gallery</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="section-sort">
                      <p>Sort</p>
                      <div className="dropdown-wrap">
                        <p className="dropdown-title section-sort-ttl">Newness</p>
                        <ul className="dropdown-list">
                          <li>
                            <a href="#">Popularity</a>
                          </li>
                          <li>
                            <a href="#">Average rating</a>
                          </li>
                          <li className="active">
                            <a href="#">Newness</a>
                          </li>
                          <li>
                            <a href="#">Price: low to high</a>
                          </li>
                          <li>
                            <a href="#">Price: high to low</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form method="post" className="products-per-page">
                      <p>Per Page</p>
                      <select>
                        <option value="12" selected="selected">12</option>
                        <option value="24">24</option>
                        <option value="48">48</option>
                        <option value="-1">All</option>
                      </select>
                    </form>
                  </div>
                </div>

                
                <div className="section-wrap-withsb">
                  <aside className="blog-sb-widgets section-sb" id="section-sb">
                    <div className="theiaStickySidebar">
                      <p className="section-filter-toggle filter_hidden">
                        <a href="#" id="section-filter-toggle-btn">Show Filter</a>
                      </p>
                      <div className="section-filter">
                        <div className="section-filter">
                          <div className="blog-sb-widget multishopcategories_widget">
                            <h3 className="widgettitle">Categories</h3>
                            <div className="section-sb-current">
                              <ul className="section-sb-list">
                                <li>
                                  <a href="#"><span className="section-sb-label">Electricity <span className="count">6</span></span></a>
                                </li>
                                <li>
                                  <a href="#"><span className="section-sb-label">Fasteners <span className="count">8</span></span></a>
                                </li>
                                <li>
                                  <a href="#"><span className="section-sb-label">Lighting <span className="count">6</span></span></a>
                                </li>
                                <li>
                                  <a href="#"><span className="section-sb-label">Other <span className="count">9</span></span></a>
                                </li>
                                <li>
                                  <a href="#"><span className="section-sb-label">Pipes <span className="count">9</span></span></a>
                                </li>
                                <li>
                                  <a href="#"><span className="section-sb-label">Sanitary Engineering <span className="count">7</span></span></a>
                                </li>
                                <li>
                                  <a href="#"><span className="section-sb-label">Tools <span className="count">21</span></span></a>
                                </li>
                              </ul>
                            </div>
                          </div>


                          <div className="blog-sb-widget multishopfeaturedproducts_widget">
                            <h3 className="widgettitle">Featured</h3>
                            <div className="products-featured-wrap">
                              <div className="products-featured">
                                <p className="products-featured-categ">
                                  <a href="#">Tools</a>
                                </p>
                                <h5 className="products-featured-ttl"><a href="product.html">Rechargeable Battery</a></h5>
                                <p className="products-featured-price">$201.00</p>
                              </div>
                              <div className="products-featured">
                                <p className="products-featured-categ">
                                  <a href="#">Pipes</a>
                                </p>
                                <h5 className="products-featured-ttl"><a href="product.html">Wholesale Brass</a></h5>
                                <p className="products-featured-price">$15.00</p>
                              </div>
                              <div className="products-featured">
                                <p className="products-featured-categ">
                                  <a href="#">Pipes</a>
                                </p>
                                <h5 className="products-featured-ttl"><a href="product.html">Fittings Pipe</a></h5>
                                <p className="products-featured-price">$77.00</p>
                              </div>
                              <div className="products-featured">
                                <p className="products-featured-categ">
                                  <a href="#">Pipes</a>
                                </p>
                                <h5 className="products-featured-ttl"><a href="product.html">Fittings Pipe</a></h5>
                                <p className="products-featured-price">$105.00</p>
                              </div>
                              <div className="products-featured">
                                <p className="products-featured-categ">
                                  <a href="#">Fasteners</a>
                                </p>
                                <h5 className="products-featured-ttl"><a href="product.html">Flat Bolt</a></h5>
                                <p className="products-featured-price">$45.00</p>
                              </div>
                            </div>
                          </div>
                          <div className="blog-sb-widget multishopbrands_widget">
                            <h3 className="widgettitle">Brands</h3>
                            <ul className="brands-list-sb">
                              <li>
                                <a href="#">HOOK <span className="count">5</span></a>
                              </li>
                              <li>
                                <a href="#">Fuel Tank <span className="count">7</span></a>
                              </li>
                              <li>
                                <a href="#">BMP <span className="count">17</span></a>
                              </li>
                              <li>
                                <a href="#">BISON <span className="count">9</span></a>
                              </li>
                              <li>
                                <a href="#">AIR <span className="count">6</span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>        <div className="section-list-withsb" id="section-list-withsb">
                    <div className="theiaStickySidebar">

                    
                      <div className="row prod-items prod-items-2">
                        <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price">$120.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Searchlight Portable</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price">$120.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Lighting</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Searchlight Portable</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x195" alt=""/>
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
                                <p className="prod-i-price"><del>$15.00</del> $20.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Other</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Flooring</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price">$18.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Other</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Pneumatic Coil Hose</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price">$45.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Other</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Door Hinge Metal</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                              <p className="prod-i-badge"><span>Sale</span></p>
                            </div>
                            <div className="prod-i-bot">
                              <div className="prod-i-info">
                                <p className="prod-i-price">$70.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Electricity</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Universal Plug</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price"><del>$12.00</del> $22.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Tools</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Drill Tool Kit</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price">$24.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Pipes</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Metal-Plastic Pipes</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                                <p className="prod-i-price">$31.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Electricity</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">LED Lamp</a></h3>
                            </div>
                          </div>
                        </article>            <article className="cf-sm-6 cf-md-6 cf-lg-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 sectgl-item">
                          <div className="sectgl prod-i">
                            <div className="prod-i-top">
                              <a className="prod-i-img" href="product.html">
                                <img src="http://placehold.it/290x258" alt=""/>
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
                              <p className="prod-i-badge"><span className="badge-1">Top seller</span></p>
                            </div>
                            <div className="prod-i-bot">
                              <div className="prod-i-info">
                                <p className="prod-i-price">$10.00</p>
                                <p className="prod-i-categ"><a href="catalog-gallery.html">Electricity</a></p>
                              </div>
                              <h3 className="prod-i-ttl"><a href="product.html">Power Socket</a></h3>
                            </div>
                          </div>
                        </article>    </div>
                      <ul className="page-numbers">
                        <li><span className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="#">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers" href="#">4</a></li>
                        <li><a className="next page-numbers" href="#"><i className="fa fa-angle-right"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </main>
          </div>

        </div>
        </>
    )
}

export default SiteContent