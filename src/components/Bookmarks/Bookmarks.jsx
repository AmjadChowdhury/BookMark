import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';

const Bookmarks = ({bookmarks,reading}) => {
    return (
        <div className="md:w-1/3 bg-white min-h-screen pt-4 mx-2 rounded-lg">
            <h1 className='text-center text-xl text-white bg-blue-600 font-extrabold p-4 mx-2 rounded-lg'>Reading Time : {reading} minute</h1>
            <h1 className='text-center text-xl text-white bg-green-600 font-extrabold p-4 m-2 rounded-lg'>Bookmarks Blogs : {bookmarks.length} minute</h1>
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