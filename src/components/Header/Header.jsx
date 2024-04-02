import profile from '../../assets/boy2.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-4 border-dotted pb-5'>
            <h1 className="text-2xl font-bold">Bookshelf</h1>
            <img src={profile} alt="profile" className='w-[50px]' />
        </div>
    );
};

export default Header;