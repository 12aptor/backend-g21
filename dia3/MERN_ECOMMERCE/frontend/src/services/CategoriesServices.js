import {API_URL} from "../lib/Enviroments"

export const getAllCategoriesService = async () =>{
    const response = await fetch('http://127.0.0.1:5000/categories')
    //console.log(response)
    const status = response.status
    const data = await response.json()
    console.log("status response : ",status)
    //console.log(data)
    return {data,status}
}