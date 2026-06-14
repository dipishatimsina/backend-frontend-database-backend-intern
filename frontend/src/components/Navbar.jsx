import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

    const handleLogout = async () => {
      try {
        await axios.post("/api/auth/logout", {}, { withCredentials: true });
        setAuth(null);
        navigate('/login'); //Redirect to login after logout
      }
      catch (error) {
        console.error("Logout failed", error);
        //Optionally handle the error, e.g., show a notification

      }
    }

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className='flex justify-between'>
          <Link to="/" className="text-white mr-4">
            Home 
          </Link>
          <div>
            {auth?.accessToken ? (
              <>
                <button>
                  Logout
                </button>
              </>
            ) : (
              <div >
                <Link to="/Login" className="text-white mr-4">
                  Login
                </Link>
                <Link to="/Register" className="text-white mr-4">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
