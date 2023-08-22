import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import router from "./router/Router"
import './assets/css/bootstrap.min.css'
import './assets/css/theme.min.css'
import './assets/css/icons.min.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
