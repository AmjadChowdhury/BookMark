import PropTypes from 'prop-types'

const BookMark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-cyan-600 p-4 m-4 rounded-lg'>
            <h1 className='text-2xl font-bold text-white'>{title}</h1>
        </div>
    );
};

BookMark.propTypes = {
    bookmark : PropTypes.object
}

export default BookMark;