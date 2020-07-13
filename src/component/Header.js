import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <nav>
            <ul>
                <Link to="/">
                <li>ShowUser</li>
                </Link>
                <Link to="/adduser">
                <li>AddUser</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Header