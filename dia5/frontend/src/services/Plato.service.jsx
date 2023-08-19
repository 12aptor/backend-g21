import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

class PlatoService{

    getAll(){
        return axios
        .get(API_URL+"/plato")
        .then(res=>{
            return res.data.content
        })
    }
}

export default new PlatoService()