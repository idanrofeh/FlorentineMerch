import { NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <section className="app-header">
      <NavLink to="/" className="logo">
        <img
          height={90}
          width={220}
          src="https://res.cloudinary.com/dc6ailej1/image/upload/v1648519937/d49077fa_1_wk9qir.png"
        />
      </NavLink>
      <div className="header-nav">
        <NavLink className="header-btn" to="/about">
          About
        </NavLink>
      </div>
    </section>
  );
}
