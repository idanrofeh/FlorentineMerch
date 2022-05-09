import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { CartOrder } from "../cmps/CartOrder/CartOrder.jsx";
import { UserMsg } from "../cmps/UserMsg.jsx";

import { updateCart } from "../store/actions/cart-actions";

function _Cart({ cart, updateCart }) {
  const [msgId, setMsgId] = useState(null);

  const removeOrder = (id) => {
    let newCart = [...cart];
    newCart = newCart.filter((order) => order.id !== id);
    updateCart(newCart);
  };

  const getCartPrice = () => {
    let price = 0;
    cart.map((order) => {
      price += order.price;
    });
    return price;
  };

  if (!cart.length)
    return (
      <div className="empty page">
        <div> העגלה שלך ריקה</div>
        <NavLink to="/FlorentineMerch" className="add-order">
          הוסף הזמנה
        </NavLink>
      </div>
    );
  return (
    <>
      <UserMsg
        yesFunc={removeOrder}
        whichMsg="order-delete"
        msgId={msgId}
        setMsgId={setMsgId}
      />
      <section className="cart page">
        <div className="order-list">
          {cart.map((order) => {
            return (
              <CartOrder key={order.id} order={order} setMsgId={setMsgId} />
            );
          })}
          <NavLink to="/FlorentineMerch" className="add-order">
            הוסף הזמנה
          </NavLink>
          <div>
            <span>{getCartPrice() + "₪"}</span>
          </div>
        </div>
      </section>
    </>
  );
}

function mapStateToProps(state) {
  return { cart: state.cartModule.cart };
}

const mapDispatchToProps = {
  updateCart,
};

export const Cart = connect(mapStateToProps, mapDispatchToProps)(_Cart);
