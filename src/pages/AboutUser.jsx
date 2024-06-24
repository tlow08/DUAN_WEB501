
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const AboutUser = () => {

  const nav = useNavigate();
  const  {isAuthenticated, user, logout} = useContext(AuthContext);
  const handleLogout = ()=>{
    if(confirm("Bạn muốn đăng xuất?")){
      logout();
      nav("/");
    }
  }


  return (
    <section>
    {isAuthenticated ?(
      <>
      <p className='text-xl font-semibold my-8'>Welcome, {user?.email}</p>
      {user?.role === 'admin' && <Link to="/admin/dashboard" className='btn btn-warning mr-4'>Admin page</Link>}
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>

      </>
    ):(
      <>
      <p>Welcome, {user?.email}</p>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
      </>
    )}
  
    </section>
  )
}

export default AboutUser;
