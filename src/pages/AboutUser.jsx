import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AboutUser = () => {

  const [user, setUser] = useState(null);
  const nav = useNavigate();
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('user'));
    // console.log(userData);
    setUser(userData);
  },[]);

  const handleLogout = ()=>{
    if(confirm("Bạn muốn đăng xuất?")){
      localStorage.removeItem('user');
      nav("/login");
    }
  }


  return (
    <section>
     {user ? (
       <div className='flex gap-3'>
        <Link to="/admin" className='btn btn-warning'>Admin</Link>
        <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
       </div>
     ):(
        <p>Loading...</p>
     )}
    </section>
  )
}

export default AboutUser;
