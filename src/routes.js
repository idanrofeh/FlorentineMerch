import { OrderEdit } from "./pages/OrderEdit.jsx";
import { Cart } from "./pages/Cart.jsx";
import { About } from "./pages/About.jsx";


export default [
    {
        path: "/",
        component: OrderEdit,
    },
    {
        path: "/cart",
        component: Cart
    },
    {
        path: "/about",
        component: About,
    }
]