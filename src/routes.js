import { OrderEdit } from "./pages/OrderEdit.jsx";
import { Cart } from "./pages/Cart.jsx";
import { About } from "./pages/About.jsx";


export default [
    {
        path: "/FlorentineMerch",
        component: OrderEdit,
    },
    {
        path: "/FlorentineMerch/cart",
        component: Cart
    },
    {
        path: "/FlorentineMerch/about",
        component: About,
    }
]