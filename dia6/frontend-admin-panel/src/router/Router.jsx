import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/Home"
import Login from  "../pages/Login"
import Categoria from "../pages/Categoria"

const router = createBrowserRouter([
{
    path:"/",
    element:<Home/>,
},
{
    path:"/login",
    element:<Login/>
},
{
    path:"/categoria",
    element:<Categoria/>
}
])

export default router