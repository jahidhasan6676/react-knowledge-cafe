import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);


    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h2 className="text-xl font-semibold">Blogs: {blogs.length} </h2> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleToBookmark={handleToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blogs;