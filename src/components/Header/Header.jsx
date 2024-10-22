
import profile from '../../images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center py-2  border-b-2'>
            <h1 className='text-2xl font-bold'>Knowledge Cafe</h1>
            <img src={profile}/>
         
        </div>
         
    );
};

export default Header;