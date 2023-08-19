import React from 'react'

class SearchPopup extends React.Component {

    render(){
        return(
            <>
            <div className="td-search-popup" id="td-search-popup">
                    <form action="index.html" className="search-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search....."/>
                        </div>
                        <button type="submit" className="submit-btn"><i className="fa fa-search"></i></button>
                    </form>
                </div>
            </>
        )
    }
}

export default SearchPopup