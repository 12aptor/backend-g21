import { useState,useEffect } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import CategoriaService from "../services/Categoria.services"

const Categoria = () => {
    const [data,setData] = useState([])
    const [newData,setNewData] = useState({
        descripcion:""
    })
    const [refreshData,setRefreshData] = useState(false)
    const [dataId,setDataId] = useState(0)

    const tab = <>&nbsp;&nbsp;</>;

    useEffect(()=>{
        CategoriaService.getAll().then(
            (res)=>{
                setData(res);
                setRefreshData(false)
            }
        )
    },[refreshData])

    const handleInputChange = (e) =>{
        const {name,value} = e.target
        return setNewData({
            ...newData,[name]:value
        })
    }

    
    const createUpdateData = (e) =>{
        e.preventDefault();
        if(dataId > 0){
            CategoriaService.updateOne(dataId,newData).then(
                (res)=>{
                    setRefreshData(true);
                    setNewData({
                        descripcion:"",
                    })
                    setDataId(0)
                }
            )
        }
        else{
            CategoriaService.setNew(newData).then(
                (res)=>{
                    console.log(res)
                    setRefreshData(true)
                    setNewData({
                        descripcion:"",
                    })
                    setDataId(0)
                }
            )
        }
    }

    const editData = (cod) =>{
        CategoriaService.getOne(cod).then(
            (res)=>{
                setNewData({
                    descripcion:res.descripcion,
                })
                setDataId(cod)
            }
        )
    }

    const deleteData = (cod) =>{
        CategoriaService.deleteOne(cod).then(
            (res)=>{
                setRefreshData(true);
                setNewData({
                    descripcion:"",
                })
                setDataId(0)
            }
        )
    }

    return(
        <div id="layout-wrapper">
            <Header />
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <Sidebar />
                </div>
            </div>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h4>CATEGORIAS</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={createUpdateData}>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Descripción</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="descripcion" 
                                                placeholder=""
                                                value={newData.descripcion}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary waves-effect waves-light">Guardar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Descripcion</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(dt => {
                                                return (
                                                    <tr key={dt.id}>
                                                        <td>{dt.descripcion}</td>
                                                        <td>
                                                            <button className="btn btn-success"
                                                            onClick={()=>editData(dt.id)}
                                                            >
                                                                Editar
                                                            </button>
                                                            {tab}
                                                            <button className="btn btn-danger"
                                                            onClick={()=>deleteData(dt.id)}
                                                            >
                                                                Eliminar
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categoria