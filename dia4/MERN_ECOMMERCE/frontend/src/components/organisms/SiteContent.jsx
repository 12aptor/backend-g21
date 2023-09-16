import ProductList from "../molecules/ProductList"
import ProductSiderBar from "../molecules/ProductSideBar"

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
                  <ProductSiderBar/>        
                  <div className="section-list-withsb" id="section-list-withsb">
                    <div className="theiaStickySidebar">
                      <ProductList/>
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