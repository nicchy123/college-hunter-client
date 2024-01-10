import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const {user,logOut}  = useContext(AuthContext)
  const handleSingout = ()=>{
    logOut()
    .then(res=>{})
    .catch(err=>console.log(err))
  }
    const menuItems = <>
       <li><Link>Home</Link></li>
       <li><Link to="/colleges">Colleges </Link></li>
       <li><Link to={'/admission'}>Admission</Link></li>
       <li><Link to="/my-college">My College</Link></li>
       <li><Link to="signin">Signin</Link></li>
     { user?
       <li><Link onClick={handleSingout} to="/">Signout</Link></li>:
       <li><Link to="/signup">Signup</Link></li>
      }
    </>
    return (
     <nav className='bg-blue-500 text-white font-custom'>
           <div className="navbar container h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-xl dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white font-semibold bg-blue-500">
              {menuItems}
            </ul>
          </div>
          <h1 className='text-2xl font-semibold'>
            <Link>College Hunter</Link>
            </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-lg">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ?<Link to={'/profile'}><img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" /></Link>: <AiOutlineUser className="w-10 h-10 p-1 rounded-full object-cover border"/>}
        </div>
      </div>
     </nav>
    );
};

export default Navbar;