import React from 'react'
import { Link } from 'react-router-dom'

import './NotFound.css'

function NotFound() {
    return (
        <div className='notfound-banner'>
            <div className='notfound-container'>
                <div className='not-found-text'>
                    <h1 style={{color:'red'}}>ERROR 404, PAGE NOT FOUND :/</h1>
                    <Link to='/news'><button className='error-btn'>Go Back</button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default NotFound
