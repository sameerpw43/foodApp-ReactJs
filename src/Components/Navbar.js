import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const authToken = localStorage.getItem("authToken");
  const navigate = useNavigate();
  const handlelogout = () =>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">YumHub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
              </li>
              {authToken &&
                <li className="nav-item">
                  <Link className="nav-link active fs-5" aria-current="page" to="/profile">Profile</Link>
                </li>
              }
            </ul>
            {authToken ?
            <div>
              <div className='btn bg-light text-dark mx-2'>My Cart</div>
              <div className='btn bg-light text-danger mx-2' onClick={handlelogout}>Logout</div>
             </div> :
              <div className='d-flex'>
                <Link className="btn bg-light text-dark mx-1" to="/login">Login</Link>
                <Link className="btn bg-light text-dark mx-1" to="/createuser">SignUp</Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
