import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (loading) return <p>Cargando detalles...</p>;
    if (error) return <p>Ocurrió un error...</p>;

    return (
        <div>
            <h1>BlogDetails nº {data.id}</h1>
            <p>{data.title}</p>
            <p>{data.body}</p>
            <Link to="/blog" className="btn btn-dark btn-lg my-2">
                Volver al inicio
            </Link>
        </div>
    );
};
export default BlogDetails;
