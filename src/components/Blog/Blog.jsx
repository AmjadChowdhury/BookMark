import PropTypes from 'prop-types'
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({blog,handleBookMark,handleReadingTime}) => {
    const {id,title,cover,author,author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='px-2'>
            <img src={cover} alt="" className='w-full' />
            <div className='flex justify-between items-center my-2'>
                <div className='flex'>
                    <img src={author_img} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p><span className='text-xl font-extrabold text-green-700'>{reading_time}</span> min reading</p>
                    <button onClick={() => handleBookMark(blog)} className='ml-2'><MdOutlineBookmarks className='text-blue text-2xl'></MdOutlineBookmarks></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <div>
                {
                    hashtags.map((hash,idx) => <span className='mr-2 text-xl' key={idx}><a href="">{hash}</a></span>)
                }
            </div>
            <button className='text-blue-600 text-xl underline mb-3' onClick={() => handleReadingTime(id,reading_time)}>Mark As Read</button>
            <p className='border-b-4 border-dotted border-emerald-700 px-2 mb-2'></p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object,
    handleBookMark : PropTypes.func,
    handleReadingTime : PropTypes.func
}

export default Blog;