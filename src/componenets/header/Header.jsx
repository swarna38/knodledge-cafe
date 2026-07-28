 
import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
       <div className='flex justify-between items-center mx-4 p-4 border-b-2' >
          <h1 className='text-black font-bold text-2xl'>knowledge cafe</h1>
          <img src={profile} alt="" />
       </div>
    );
};

export default Header;