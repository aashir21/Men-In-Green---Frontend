import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Players.css'


function Players() {

    const [t20,getT20] = useState([]);
    const [odi,getODI] = useState([]);
    const [test,getTest] = useState([]);

    useEffect(()=>{
        fetch('https://meningreen-backend.herokuapp.com/players/t20player-list/')
        .then(res=> res.json())
        .then(data=>getT20(data))
    },[])

    useEffect(()=>{
        fetch('https://meningreen-backend.herokuapp.com/players/odiplayer-list/')
        .then(resp=> resp.json())
        .then(datas=>getODI(datas))
    },[])

    useEffect(()=>{
        fetch('https://meningreen-backend.herokuapp.com/players/testplayer-list/')
        .then(response=> response.json())
        .then(content=>getTest(content))
    },[])

    document.title = 'Players'


    return (
        <>

            <div className='players-banner'>
                <div className='players-text-container'>
                    <p className='header'>T20I PLAYERS</p>
                </div>

                <div className='players-container'>
                    {
                        t20.map((Tplayers)=>{
                            return(
                                <Link to ={`/t20player/${Tplayers.id}`}  className='player-link-tag'>
                                    <div className='player-card' key={Tplayers.id} data-aos="fade-right">
                                        <div className='player-image'>
                                            <img src={Tplayers.image} className='p-img' alt='player'></img>    
                                        </div>
                                        
                                        <div className='player-name'>{Tplayers.name}</div>
                                        
                                    </div>
                                </Link>
                            )                            

                        })
                    }
                </div>
            </div>
            

            <div className='players-banner'>
                <div className='players-text-container'>
                    <p className='header'>ODI PLAYERS</p>
                </div>

                <div className='players-container'>
                    {
                        odi.map((Oplayers)=>{
                            return(
                                <Link to={`/odiplayer/${Oplayers.id}`} className='player-link-tag'>
                                    <div className='player-card' key={Oplayers.id} data-aos="fade-right" >
                                        <div className='player-image'>
                                            <img src={Oplayers.image} className='p-img' alt='player'></img>
                                            
                                        </div>
                                        
                                        <div className='player-name'>
                                            <p>{Oplayers.name}</p>
                                        </div>
                                        
                                    </div>
                                </Link>
                            )                            

                        })
                    }
                </div>
            </div>

            <div className='players-banner'>
                <div className='players-text-container'>
                    <p className='header'>TEST PLAYERS</p>
                </div>

                <div className='players-container'>
                    {
                        test.map((Testplayers)=>{
                            return(
                                
                                <Link to={`/testplayer/${Testplayers.id}`} className='player-link-tag'>
                                    <div className='player-card' key={Testplayers.id} data-aos="fade-right">
                                        <div className='player-image'>
                                            <img src={Testplayers.image} className='p-img' alt='player'></img>
                                        </div>
                                        <div className='player-name'>{Testplayers.name}</div>
                                    </div>
                                </Link>
                                
                                )                            

                        })
                    }
                </div>
            </div>
            
        </>
    )
}

export default Players
