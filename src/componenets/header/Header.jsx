 
import profile from '../../assets/img/profile.png'
const Header = () => {
    return (
       <div className='justify-items-center p-4'>
          <h3 className='text-black text-4xl font-bold'>knowledge cafe</h3>
          <img src={profile} alt="" />
       </div>
    );
};

export default Header;