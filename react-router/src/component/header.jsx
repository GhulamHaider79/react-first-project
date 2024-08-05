import React from 'react'
import {Link, NavLink} from 'react-router-dom';



const Header = () => {
    const routes = [
        {
          pageName: "Home",
          path: "/",
        },
        {
          pageName: "About",
          path: "/about",
        },
        {
          pageName: "contact",
          path: "/contact",
        },
        {
          pageName: "services",
          path: "/services",
        },
      ];
    return (
        <header className='flex '>
        <div><h1 className='bg-slate-800'>My Logo</h1></div>
        <div>
          <ul className='flex'>
            {routes.map(({ pageName, path }, index) => {
              return (
                <li>
                  <Link to={path}>{pageName}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    );
}

export default Header
