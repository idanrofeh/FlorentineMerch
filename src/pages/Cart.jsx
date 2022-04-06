import { connect } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { CartOrder } from "../cmps/CartOrder/CartOrder.jsx";

import { updateCart } from "../store/actions/cart-actions";

function _Cart({ cart, updateCart }) {
  let navigate = useNavigate();

  const removeOrder = (id) => {
    let newCart = [...cart];
    newCart = newCart.filter((order) => order.id !== id);
    updateCart(newCart);
    console.log(newCart);
  };

  if (!cart.length)
    return (
      <div className="empty page">
        <div> העגלה שלך ריקה</div>
        <NavLink to="/" className="add-order">
          הוסף הזמנה
        </NavLink>
      </div>
    );
  return (
    <section className="cart page">
      <div className="order-list">
        {cart.map((order) => {
          return (
            <CartOrder key={order.id} order={order} removeOrder={removeOrder} />
          );
        })}
      </div>
      <NavLink to="/" className="add-order">
        הוסף הזמנה
      </NavLink>
    </section>
  );
}

function mapStateToProps(state) {
  return { cart: state.cartModule.cart };
}

const mapDispatchToProps = {
  updateCart,
};

export const Cart = connect(mapStateToProps, mapDispatchToProps)(_Cart);
