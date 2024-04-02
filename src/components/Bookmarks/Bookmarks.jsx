import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';

const Bookmarks = ({bookmarks,reading}) => {
    return (
        <div className="md:w-1/3 bg-green-200 pt-4 mx-2 rounded-lg">
            <h1 className='text-center text-3xl text-white bg-purple-600 font-extrabold p-4 m-2 rounded-lg'>Reading Time {reading}</h1>
            <h1 className='text-center text-3xl text-white bg-teal-600 font-extrabold p-4 m-2 rounded-lg'>Bookmarks Blogs : {bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map((bookmark,idx) => <BookMark key={idx} bookmark={bookmark}></BookMark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    reading : PropTypes.number
}

export default Bookmarks;