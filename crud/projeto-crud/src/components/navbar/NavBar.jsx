import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-white bg-info'>
            <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}> CRUD </Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'> Home </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Estudante
                        </a>
                        <ul className="dropdown-menu">
                            <li className='nav-item'>
                                <Link to='/createStudent' className='nav-link'> Criar Estudante </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/listStudent' className='nav-link'> Listar Estudante </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Professor
                        </a>
                        <ul className="dropdown-menu">
                            <li className='nav-item'>
                                <Link to='/createTeacher' className='nav-link'> Criar Professor </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/listTeacher' className='nav-link'> Listar Professor </Link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;