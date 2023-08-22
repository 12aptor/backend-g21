import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const Home = () => {
    return(
            <div id="layout-wrapper">
                <Header/>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        <Sidebar/>
                    </div>
                </div>
                <div className="main-content">
                        <div className="page-content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="page-title-box d-flex align-items-center justify-content-between">
                                            <h4 className="mb-0 font-size-18">Principal</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="row>">

                                </div>
                            </div> 
                        </div>
                </div>
            </div>
    )
}

export default Home