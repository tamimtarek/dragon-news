import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h3 className="text-3xl">All Category</h3>
            <div className="space-y-1 m-2">
                {
                    categories.map(category => <NavLink className="block p-4 bg-amber-100" to={`/category/${category.id}`} key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;