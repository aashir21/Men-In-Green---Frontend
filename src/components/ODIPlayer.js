import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router'
import './T20Player.css'

function ODIPlayer() {

    const {playersId} = useParams()
    

    useEffect(()=>{
        fetch(`https://meningreen-backend.herokuapp.com/players/odiplayer-detail/${playersId}`)
        .then(res=> res.json())
        .then(data => setODIInfo(data))
    },[])

    const[odiInfo,setODIInfo] = useState([])
    var playerName = odiInfo.name

    document.title = playerName

    return (
        <>
            <div className='player-hero'>
                <div className='player-hero-container' key={odiInfo.id}>
                    <div className='image-card' data-aos="fade-right">
                        <img className='player-portrait' src={odiInfo.image}></img>
                    </div>
                    <div className='player-info-container' data-aos="fade-down">
                        <h1 className='pl-name'>{odiInfo.name}</h1>
                        <div className='player-info'>
                            <p>Date Of Birth : {odiInfo.date_of_birth}</p>
                            <p>Age : {odiInfo.age}</p>
                            <p>Height : {odiInfo.height}m</p>
                            <p>Ranking : {odiInfo.ranking}</p>
                            <p>Batting / Bowling : {odiInfo.role}</p>
                            <p>Title : {odiInfo.title}</p>
                        </div>
                        
                        
                        <div className='player-bio'>
                            <p className='player-bio-text'>{odiInfo.bio}</p>
                        </div>
                    </div>
                </div>
                
            </div>   
        </>
    )
}

export default ODIPlayer
