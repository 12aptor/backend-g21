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
    const [imageFile,setImageFile] = useState()

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

    const handleFileChange = (e) =>{
        const file = e.target.files[0]
        setImageFile(file)
    }

    
    const createUpdateData = (e) =>{
        e.preventDefault();
        
        if(dataId > 0){
            PlatoService.updateOne(dataId,newData).then(
                (res)=>{
                    setRefreshData(true);
                    setNewData({
                        nombre:"",
                        precio:0,
                        imagen:""
                    })
                    setDataId(0)
                }
            )
        }
        else{
            //subir la imagen
            let formData = new FormData()
            formData.append("file",imageFile)
            PlatoService.uploadOne(formData).then(
                (res)=>{
                    console.log("nueva imagen :",res)
                    //grabar el nuevo Plato
                    const dataPlato = {
                        nombre : newData.nombre,
                        imagen : res,
                        precio : newData.precio
                    }
                    console.log("nuevo plato : ",dataPlato)
                    PlatoService.setNew(dataPlato).then(
                        (res)=>{
                            console.log(res)
                            setRefreshData(true)
                            setNewData({
                                nombre:"",
                                precio:0,
                                imagen:""
                            })
                            setDataId(0)
                        }
                    )
                }
            )
            
           
        }
    }

    const editData = (cod) =>{
        PlatoService.getOne(cod).then(
            (res)=>{
                setNewData({
                    nombre:res.nombre,
                })
                setDataId(cod)
            }
        )
    }

    const deleteData = (cod) =>{
        PlatoService.deleteOne(cod).then(
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
                                <h4>PLATOS</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={createUpdateData}>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Nombre</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="nombre" 
                                                placeholder=""
                                                value={newData.nombre}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Precio</label>
                                                <input type="text" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="precio" 
                                                placeholder=""
                                                value={newData.precio}
                                                onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="simpleinput">Imagen</label>
                                                <input type="file" 
                                                id="simpleinput" 
                                                className="form-control"
                                                name="file" 
                                                placeholder=""
                                                onChange={handleFileChange}
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