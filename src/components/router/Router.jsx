import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Recipe from "../pages/Recipe/Recipe";
import Error from "../pages/shared/Error/Error";
import Blog from "../pages/Blog/Blog";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/recipe/:id',
                element: <PrivateRouter><Recipe></Recipe></PrivateRouter>,
                loader: ({params})=> fetch(`http://localhost:5000/recipe/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])
export default router;