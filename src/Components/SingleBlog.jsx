import React from 'react';


const SingleBlog = ({ blog }) => {
    const { readTime, views, date, title, category, image } = blog
    return (
        <div className="card bg-base-100 w-96  container mx-auto">
            <figure>
                <img className='rounded-lg'
                    src={image}
                     />
            </figure>
            <div className="card-body">
              <div className='flex flex-col items-center justify-center'>
                  <p className='text-xl text-gray-400'>{category}</p>
                <h2 className="card-title text-2xl font-bold text-center ">{title}</h2>
              </div>
                
                <div className="flex text-gray-400 gap-4 items-center justify-between">
                    <h1>{date}</h1>
                    <h1>{views}</h1>
                    <h1>{readTime}</h1>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;