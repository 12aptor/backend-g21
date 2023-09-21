const MainFooter = () =>{
    return(
        <>
        <div className="container-fluid blog-sb-widgets page-styling site-footer">
          <div className="row">
            <div className="col-sm-12 col-md-4 widget align-center-tablet f-logo-wrap">
              <a href="index.html" className="f-logo">
                <img src="img/logo.png" alt=""/>
              </a>
              <p>Modern eCommerce HTML Template</p>
              <button className="btn callback">Contact Us</button>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
              <h3 className="widgettitle">Company</h3>
              <ul className="menu">
                <li>
                  <a href="index.html">Front Page</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="index.html">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
              <h3 className="widgettitle">Shop</h3>
              <ul className="menu">
                <li>
                  <a href="catalog-list.html">Electricity</a>
                </li>
                <li>
                  <a href="catalog-gallery.html">Fasteners</a>
                </li>
                <li>
                  <a href="catalog-gallery-full.html">Lighting</a>
                </li>
                <li>
                  <a href="catalog-gallery.html">Pipes</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
              <h3 className="widgettitle">Account</h3>
              <ul className="menu">
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
                <li>
                  <a href="compare.html">Compare</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="auth.html">My Account</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-2 align-center-mobile widget">
              <h3 className="widgettitle">Blog</h3>
              <ul className="menu">
                <li>
                  <a href="blog.html">All Posts</a>
                </li>
                <li>
                  <a href="post.html">News</a>
                </li>
                <li>
                  <a href="post-slider.html">Articles</a>
                </li>
                <li>
                  <a href="blog.html">Reviews</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </>
    )
}

export default MainFooter