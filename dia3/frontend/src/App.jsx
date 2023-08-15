import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Table,Button,Form} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from './enviroment'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = (
      {
        tareas : [],
        descripcion:'',
        estado:'pendiente',
        id:0,
        pos:null
      }
    )
    this.cambioDescripcion = this.cambioDescripcion.bind(this)
    this.guardar = this.guardar.bind(this)
    this.mostrar = this.mostrar.bind(this)
    this.eliminar = this.eliminar.bind(this)
    this.cambiarEstado = this.cambiarEstado.bind(this)
  }

  componentDidMount(){
    console.log("cargando tareas...")
    axios.get(`${API_URL}/tarea`)
    .then(res=>{
      console.log(res.data)
      this.setState({
        tareas : res.data.content
      })
    })
  }

  cambioDescripcion(e){
    this.setState({
      descripcion : e.target.value
    })
  }

  mostrar(cod,index){
    axios.get(`${API_URL}/tarea/`+cod)
    .then(res=>{
      console.log(res.data.content)
      this.setState({
        descripcion:res.data.content.descripcion,
        id:res.data.content.id,
        pos:index
      })
    })
  }

  guardar(e){
    e.preventDefault()
    let cod = this.state.id
    const data = {
      descripcion : this.state.descripcion,
      estado : this.state.estado
    }
    console.log("enviando data al servidor :",data)
    
    if(cod>0){
      //actualizar
      axios.put(`${API_URL}/tarea/`+cod,data)
      .then(res=>{
        let index_tarea = this.state.pos
        //this.state.tareas[index_tarea] = res.data.content
        var temp = this.state.tareas
        temp[index_tarea] = res.data.content
        this.setState({
          tareas : temp,
          descripcion:'',
          pos:null,
          id:0
        })
      })
    }
    else{
      //insertar
      axios.post(`${API_URL}/tarea`,data)
      .then(res=>{
        console.log("respuesta del servidor :",res.data.content)
        this.state.tareas.push(res.data.content)
        var temp = this.state.tareas
        this.setState({
          tareas :temp,
          descripcion:'',
          id:0,
          pos:null
        })
      })
    }
    
  }

  eliminar(cod){
    axios.delete(`${API_URL}/tarea/`+cod)
    .then(res=>{
      console.log(res.data.content)
      var temp = this.state.tareas.filter((tarea)=>tarea.id !== res.data.content.id)
      this.setState({
        tareas:temp
      })
    })
  }

  cambiarEstado(cod,pos){
    const data = {
      estado : 'completado'
    }
    axios.patch(`${API_URL}/tarea/`+cod,data)
    .then(res=>{
      var temp = this.state.tareas
      temp[pos] = res.data.content
      this.setState({
        tareas:temp
      })
    })
  }

  render(){
    return(
      <div>
        <Container>
          <h1>Lista de Tareas</h1>
          <Form onSubmit={this.guardar}>
            <Form.Group className="mb-3">
              <Form.Control type="text" value={this.state.descripcion}
              onChange={this.cambioDescripcion}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Descripcion</th>
                <th>Estado</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tareas.map((tarea,index)=>{
                return(
                  <tr key={tarea.id}>
                    <td>{tarea.id}</td>
                    <td>{tarea.descripcion}</td>
                    <td>
                        <div className="form-check form-switch">
                          {tarea.estado == 'completado'
                            ?
                            <input className="form-check-input" type="checkbox" checked></input>
                            :
                            <input className="form-check-input" type="checkbox"></input>
                          }
                        </div>
                    </td>
                    <td>
                      <Button variant="success" onClick={()=>this.mostrar(tarea.id,index)}>
                        Editar
                      </Button>
                      <Button variant="warning" onClick={()=>this.cambiarEstado(tarea.id,index)}>
                        Completar
                      </Button>
                      <Button variant="danger" onClick={()=>this.eliminar(tarea.id)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                )
              })}
              
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}

export default App
