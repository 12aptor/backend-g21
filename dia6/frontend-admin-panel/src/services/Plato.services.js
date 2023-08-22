import axios from 'axios'
import { API_URL } from '../lib/Enviroments'

class PlatoService{

    constructor(){
        this.table_name = 'plato'
    }
    
    getAll(){
        return axios.get(API_URL+"/"+this.table_name)
        .then(res=>{
            return res.data.content;
        })
    }

    setNew(data){
        return axios.post(API_URL+"/"+this.table_name,data)
        .then(res=>{
            return res.data.content;
        })
    }

    getOne(id){
        return axios.get(API_URL+"/"+this.table_name+"/"+id)
        .then(res=>{
            return res.data.content;
        })
    }

    updateOne(id,data){
        return axios.put(API_URL+"/"+this.table_name+"/"+id,data)
        .then(res=>{
            return res.data.content;
        })
    }

    deleteOne(id){
        return axios.delete(API_URL+"/"+this.table_name+"/"+id)
        .then(res=>{
            return res.status
        })
    }

    uploadOne(file){
        return axios.post(API_URL+"/plato/upload",file)
        .then(res=>{
            return res.data.content
        })
    }

}

export default new PlatoService();