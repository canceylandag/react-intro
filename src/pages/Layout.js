import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const[isUserLogin,setIsUserLogin]=useState(false);
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/person-list">Person List</Link>
          </li>
        </ul>
      </nav>
      <nav>
        {
          !isUserLogin&&
          <button onClick={()=>setIsUserLogin(true)}>Giriş Yap</button>
        }
        {
          isUserLogin&&
          <button>Kullanıcı Adı</button>
        }
      </nav>
      </header>
      <Outlet />

     
    </>
  )
};

export default Layout;