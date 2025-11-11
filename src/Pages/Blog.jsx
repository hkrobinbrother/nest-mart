import React from 'react';
import { useLoaderData } from 'react-router';
import img1 from "../../public/images/icon-3.png"
import SingleBlog from '../Components/SingleBlog';

const Blog = () => {
    const blogs = useLoaderData()
    console.log(blogs);
    return (
        <div className='container mx-auto items-center mt-10'>
            <div>
                <div className='flex items-center gap-4'>
                    <img className='w-15 ' src={img1} alt="" />
                    <h1 className='text-4xl font-bold'>Recips Artical</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 items-center'>
                    {
                        blogs.map(blog => <SingleBlog blog={blog}></SingleBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;