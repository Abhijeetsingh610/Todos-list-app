import React from 'react'
import { Link } from "react-router-dom"


export const Footer = () => { 
    return (
        <footer className="bg-dark text-light py-3">
            Follow me on Social Media
      <div className="container-fluid"></div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Instagram</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="./About">Github</Link>
            </li>
          </ul>
        </div> 
            
            <p className="text-center">
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
export default Footer

