import {useEffect,useState} from 'react'
import { getAllProducts } from '../../services/ProductoServices'
import ProductCard from './ProductCard'


const ProductList = ()=>{
    const [listOfProducts,setListOfProducts] = useState([])

    useEffect(()=>{
      const fetchData = async()=>{
        const response = await getAllProducts()
        if(response.status === 200){
          setListOfProducts(response.data)
        }
      }
      fetchData()
    },[])


    return(
        <div className="row prod-items prod-items-2">
          {
            listOfProducts.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
          }
        </div>
    )
}

export default ProductList