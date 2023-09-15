import { API_URL } from "../lib/Enviroments";

export const getAllProducts = async () =>{
    const response = await fetch(`${API_URL}/products`)
    const status = response.status
    const data = await response.json()
    return {data,status}
}