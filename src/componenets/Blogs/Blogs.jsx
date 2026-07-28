import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";
 
const Blogs = ({ handelAddToBookMark }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl mb-3 font-bold">Blogs : {blogs.length}</h1>

            {
                blogs.map(blog => <Blog
                    key ={blog.id}
                    blog={blog}
                    handelAddToBookMark={handelAddToBookMark}
                >
                </Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
handelAddToBookMark : PropTypes.func

}

export default Blogs;