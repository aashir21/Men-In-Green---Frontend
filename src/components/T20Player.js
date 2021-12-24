import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router'
import './T20Player.css'


function T20Player() {

    const {playerId} = useParams()
    
    useEffect(()=>{
        fetch(`https://meningreen-backend.herokuapp.com/players/t20player-detail/${playerId}`)
        .then(res => res.json())
        .then(data => setPlayerInfo(data))
    },[])

    const[playerInfo,setPlayerInfo] = useState([])
    var playerName = playerInfo.name

    document.title = playerName

    return (
        <>
            <div className='player-hero'>
                <div className='player-hero-container'>
                    <div className='image-card' data-aos="fade-right">
                        <img className='player-portrait' src={playerInfo.image}></img>
                    </div>
                    <div className='player-info-container' data-aos="fade-down">
                        <h1 className='pl-name'>{playerInfo.name}</h1>
                        <div className='player-info'>
                            <p>Date Of Birth : {playerInfo.date_of_birth}</p>
                            <p>Age : {playerInfo.age}</p>
                            <p>Height : {playerInfo.height}m</p>
                            <p>Ranking : {playerInfo.ranking}</p>
                            <p>Batting / Bowling : {playerInfo.role}</p>
                            <p>Title : {playerInfo.title}</p>
                        </div>
                        
                        
                        <div className='player-bio'>
                            <p className='player-bio-text'>{playerInfo.bio}</p>
                        </div>
                    </div>
                </div>
                
            </div>   
        </>
    )
}

export default T20Player
