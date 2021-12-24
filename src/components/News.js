import React,{useEffect,useState} from 'react'
import './News.css'
import {Link} from 'react-router-dom'

function News() {

    const [articles,setArticles] = useState([])
    const [latest,setLatest] = useState([])

    
    
    useEffect(()=>{
        fetch(`https://meningreen-backend.herokuapp.com/articles/article-list/`)
        .then(res=> res.json())
        .then(content=> setArticles(content))
    },[])

    articles.reverse()
    console.log(articles)


    useEffect(()=>{
        fetch(`https://meningreen-backend.herokuapp.com/articles/article-detail/4`)
        .then(response => response.json())
        .then(data => setLatest(data))
    },[])

    document.title = 'News'

    return (
        <>  
            <br/>
            <br/>
            <div style={{backgroundImage: `url(${latest.card_image})`}} className='latest-banner' data-aos="fade-down">
                <div className='latest-container'>
                    <div className='latest-text'>
                        <h2 className='latest-title'>{latest.title}</h2>
                        <Link to={`/article/${latest.id}`} style={{textDecoration: 'none'}}>
                            <h1 className='read-more'>{'LEARN MORE  >'}</h1>
                        </Link>
                    </div>
                </div>
            </div>

            <br/>

            <div className='articles'>
                <div className='article-header'>
                    <a><h1>Read More</h1></a>
                </div>
                <div className='articles-container'>
                    {
                        articles.map((article) => {
                            return(
                                <Link to={`/article/${article.id}`} style={{textDecoration:'none',color:'black'}}>
                                    <div key={article.id} className='article-card'>
                                        <div style={{backgroundImage: `url(${article.card_image})`}} className='article-card-image'></div>
                                        <div className='article-card-text'>
                                            <h2 className='card-title'>{article.title}</h2>
                                        </div>
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

export default News
