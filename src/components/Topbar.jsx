import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Topbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
<nav className="navbar navbar-expand  topbar mb-4 static-top shadow">

  <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
    <i className="fa fa-bars" />
  </button>

  <ul className="navbar-nav ml-auto">
    <div className="topbar-divider d-none d-sm-block" />

    <li className="nav-item dropdown no-arrow">
      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {user ? (
              <span>{user.name}</span>
            ) : (
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            )}
      </a>


    </li>
  </ul>
</nav>

  )
}

export default Topbar