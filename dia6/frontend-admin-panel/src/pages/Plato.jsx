import { useState,useEffect } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import PlatoService from "../services/Plato.services"

const Plato = () => {
    const [data,setData] = useState([])
    const [newData,setNewData] = useState({
        nombre:"",
        precio:0,
        imagen:""
    })
    const [refreshData,setRefreshData] = useState(false)
    const [dataId,setDataId] = useState(0)

    const tab = <>&nbsp;&nbsp;</>;

    useEffect(()=>{
        PlatoService.getAll().then(
            (res)=>{
                console.log(res)
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
                        nombre:"",
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
                        nombre:"",
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
                    nombre:res.nombre,
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
                    nombre:"",
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
                                                name="nombre" 
                                                placeholder=""
                                                value={newData.nombre}
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
                                                <th>nombre</th>
                                                <th>Precio</th>
                                                <th>Imagen</th>
                                                <th>Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(dt => {
                                                return (
                                                    <tr key={dt.id}>
                                                        <td>{dt.nombre}</td>
                                                        <td>{dt.precio}</td>
                                                        <td><img src={dt.imagen} className="avatar-md"/></td>
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

export default Plato