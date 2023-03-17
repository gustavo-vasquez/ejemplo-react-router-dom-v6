import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light">
        <div className="container">
            <NavLink to="/" className="btn btn-lg btn-outline-success border border-2 border-success">Inicio</NavLink>
            <NavLink to="/contacto" className="btn btn-lg btn-outline-danger border border-2 border-danger">Contacto</NavLink>
            <NavLink to="/blog" className="btn btn-lg btn-outline-warning border border-2 border-warning">Blog</NavLink>
        </div>
    </div>
  );
};
export default Navbar;
