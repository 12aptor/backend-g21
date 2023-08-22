const Header = () =>{
    return(
        <header id="page-topbar">
                    <div className="navbar-header">

                        <div className="d-flex align-items-center">

                            <div className="dropdown d-none d-sm-inline-block ml-2">
                                <button type="button" className="btn header-item noti-icon waves-effect"
                                    id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i className="mdi mdi-magnify"></i>
                                </button>
                            </div>

                        </div>
                    </div>
        </header>
    )
}

export default Header