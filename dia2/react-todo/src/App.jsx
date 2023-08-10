import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Table,Button,Form} from 'react-bootstrap'
import axios from 'axios'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = (
      {
        tareas : [],
        descripcion:'',
        estado:'pendiente'
      }
    )
    this.cambioDescripcion = this.cambioDescripcion.bind(this)
  }

  componentDidMount(){
    console.log("cargando tareas...")
    axios.get('http://localhost:5000/tarea')
    .then(res=>{
      console.log(res.data)
      this.setState({
        tareas : res.data.content
      })
    })
  }

  cambioDescripcion(e){
    console.log(e.target.value)
    this.setState({
      descripcion : e.target.value
    })
  }

  guardar(e){
    e.preventDefault()
    let data_descripcion = this.state.descripcion
    console.log("enviando nueva tarea...")
    console.log("descripcion : " + data_descripcion)
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
              </tr>
            </thead>
            <tbody>
              {this.state.tareas.map(tarea=>{
                return(
                  <tr key={tarea.id}>
                    <td>{tarea.id}</td>
                    <td>{tarea.descripcion}</td>
                    <td>{tarea.estado}</td>
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
