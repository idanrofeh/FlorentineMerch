import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <section className="app-header">
      <NavLink to="/" className="logo">
        <img
          alt=""
          src="https://res.cloudinary.com/dc6ailej1/image/upload/v1648519937/d49077fa_1_wk9qir.png"
        />
      </NavLink>
      <div className="header-nav">
        <NavLink className="header-btn" to="/about">
          צור קשר
        </NavLink>
        <NavLink className="header-btn" to="/cart">
          עגלה
        </NavLink>
        <NavLink className="header-btn" to="/">
          הזמנה חדשה
        </NavLink>
      </div>
    </section>
  );
}
