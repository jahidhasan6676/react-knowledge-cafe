import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';

const Blog = ({blog,handleToBookmark,handleMarkAsRead}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags,id} = blog;
    // console.log(blog)
    return (
        <div className='mb-8'>
            <img className='rounded-md' src={cover}/>
            {/* person details container */}
            <div className='flex justify-between items-center mt-4'>
                {/* left side */}
                <div className='flex gap-2 items-center'>
                    <div className='w-8'>
                        <img src={author_img}/>
                    </div>
                    <div className='text-sm font-normal'>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <span className='text-sm font-normal'>{reading_time} min read</span>
                    <button onClick={()=>handleToBookmark(blog)} className='ml-1 text-red-500'><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2  className='text-xl font-semibold mt-2'>Title: {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='text-sm font-normal mr-3'><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time, id)} className='text-sm underline text-blue-500 font-normal'>Mark as read</button>
        </div>
    );
};


Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;