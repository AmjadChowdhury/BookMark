import PropTypes from "prop-types";
import { MdOutlineBookmarks } from "react-icons/md";

const Blog = ({ blog, handleBookMark, handleReadingTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="px-2 border shadow-lg">
      <img src={cover} alt="" className="w-full h-52" />
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center">
          <img src={author_img} className="w-10 h-10" alt="" />
          <div className="ml-4">
            <h3 className="text-lg font-bold">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={() => handleBookMark(blog)} className="ml-2">
            <MdOutlineBookmarks className="text-green-600 text-2xl"></MdOutlineBookmarks>
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold">{title}</h1>
      <div>
        {hashtags.map((hash, idx) => (
          <span className="mr-2 text-sm" key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </div>
      <div className="flex gap-5">
        <button
          className="text-blue-600 text-base underline mb-3"
          onClick={() => handleReadingTime(id, reading_time)}
        >
          Mark As Read
        </button>
        <p>
          <span className="font-bold text-green-600">{reading_time}</span> min
          reading
        </p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookMark: PropTypes.func,
  handleReadingTime: PropTypes.func,
};

export default Blog;
