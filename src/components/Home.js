import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

    document.title = 'Men In Green'

    return (
        <>
            <div className='hero'>
                <div className='hero-container'>
                    <div className='hero-text'>
                        <h1 className='hero-title1'>PAKISTAN<span className='inner'>CRICKET </span></h1>
                        <h2 className='hero-subtext'>"One Minute Down, Next Minute Up"</h2>
                        <Link to='/news'><button className='hero-btn'>DISCOVER</button></Link>
                    </div>
                    <div className='hero-image'></div>
                </div>
            </div>
            
            <div className='mid'>
                <div className='mid-container'>
                    <div className='card' data-aos="fade-right">

                        <div className='card-img'>

                        </div>
                        <div className='card-text'>
                            <p>Stay Up-To-Date With All The Latest News</p>
                        </div>

                    </div>

                    <div className='card' data-aos="fade-left">

                        <div className='card-img-2'>
                            
                        </div>
                        <div className='card-text'>
                            <p>Check For New Fixtures & Additions To The Squad</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='footer-con'>
                    <div className='footer-text'>
                        <h1 id='footer-inner-1'>"ONE MINUTE DOWN,</h1>
                        <h1 id='footer-inner-2'>NEXT MINUTE UP"</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
