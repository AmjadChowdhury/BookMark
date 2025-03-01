import PropTypes from 'prop-types'

const BookMark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-green-600 p-2 my-2 mx-12 rounded-lg text-center'>
            <h1 className='text-base font-bold text-white'>{title}</h1>
        </div>
    );
};

BookMark.propTypes = {
    bookmark : PropTypes.object
}

export default BookMark;