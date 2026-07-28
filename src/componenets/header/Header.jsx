 
import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
       <header className='flex justify-between items-center border-b-2 mb-9 py-3' >
          <h1 className='text-black font-bold text-2xl'>knowledge cafe</h1>
          <img src={profile} alt="" />
       </header>
    );
};

export default Header;