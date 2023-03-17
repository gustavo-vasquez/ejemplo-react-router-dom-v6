import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import LayoutPublic from "./layouts/LayoutPublic";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Error404 from "./pages/Error404";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<LayoutPublic />}>
                    <Route element={<Index />} index></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/blog/:id" element={<BlogDetails />}></Route>
                    <Route path="*" element={<Error404 />}></Route>
                </Route>
            </Routes>
        </div>
    );
};
export default App;
