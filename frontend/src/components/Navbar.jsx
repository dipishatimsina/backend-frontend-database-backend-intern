import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { auth } = useAuth();


  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between"> 
        <div>
          <Link to="/" className="text-white mr-4">
            Home
          </Link>
          <div>
            {auth?.accessToken ? <>
                <buton>
                  Logout
                </buton>

            </> :
            <>
                <Link to="/Login" className="text-white mr-4">
                  Login
                </Link>
                <Link to="/Register" className="text-white mr-4">
                  Register
                </Link>
              }
          </div>
          
        </div>
      </div>
    </nav>
  );
};


export default Navbar
