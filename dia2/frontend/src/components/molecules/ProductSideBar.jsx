import {useEffect,useState} from 'react'
import { getAllCategoriesService } from "../../services/CategoriesServices"


const ProductSiderBar = ()=>{
    const [listOfCategories,setListOfCategories] = useState([])

    useEffect(()=>{
      console.log("...llamando categorias")
      const fetchData = async()=>{
        const response = await getAllCategoriesService()
        if(response.status === 200){
          console.log("data retorno :",response.data)
          setListOfCategories(response.data)
        }
      }
      fetchData()
    },[])

    return(
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
                                {listOfCategories.length > 0 &&
                                  listOfCategories.map((category,index)=>(
                                  <li key={index}>
                                      <a href="#"><span className="section-sb-label">{category.name} <span className="count">6</span></span></a>
                                    </li>
                                  ))
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
    )
}

export default ProductSiderBar