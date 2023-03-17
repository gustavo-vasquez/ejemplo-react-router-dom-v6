import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    const [searchParams, setSearchParams] = useSearchParams();
    const filterForm = useRef(null);

    useEffect(() => {
        console.log(data);
    }, [searchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(filterForm.current);
        const entries = Object.fromEntries([...data.entries()]);

        if (!entries.filterName.trim()) return setSearchParams({});

        setSearchParams({ filter: entries.filterName });
    };

    const filterWord = (item) => {
        let filterParam = searchParams.get("filter");
        if (!filterParam) return true;

        let titleToFilter = item.title.toLowerCase();
        return titleToFilter.includes(filterParam.toLowerCase());
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Ocurrió un error...</p>;

    return (
        <div>
            <h1>Blog</h1>
            <form onSubmit={handleSubmit} ref={filterForm}>
                <input
                    type="text"
                    name="filterName"
                    className="form-control mb-4"
                    placeholder="Filtrar por palabra..."
                    autoFocus
                />
            </form>

            <ul className="list-group">
                {data.filter(filterWord).map((item) => (
                    <Link
                        to={`/blog/${item.id}`}
                        key={item.id}
                        className="list-group-item"
                    >
                        {item.title}
                    </Link>
                ))}
            </ul>
        </div>
    );
};
export default Blog;
