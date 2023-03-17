import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <div className="container">
            <Outlet />
            <footer className="py-4">Hola soy el footer</footer>
        </div>
    );
};
export default LayoutPublic;
