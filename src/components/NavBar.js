import React,{useEffect} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

function NavBar() {

    useEffect(()=>{
        var toggleButton = document.getElementsByClassName('toggle-button')[0]
        var navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener("click", () => {
        navbarLinks.classList.toggle('active')
    })
    })
    
    return (


        <>
            <nav className='navbar'>
                <Link to='/' className='brand-link'><div className='brand-title'>Men In <span className='nav-inner'>GREEN</span></div></Link>
                <a className='toggle-button' href='#'>
                    <span className='bar' ></span>
                    <span className='bar' ></span>
                    <span className='bar' ></span>
                </a>
                <div className ='navbar-links'>
                    <ul>
                        <Link to='/news' className='links'><li>News</li></Link>
                        <Link to='/players' className='links'><li>Players</li></Link>
                    </ul>
                </div>
            </nav>        
            
        </>
    )

    
}

export default NavBar
