import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import './Article.css'

function Article() {

    const {articleId} = useParams()

    const[articleData,setArticleData] = useState([])

    useEffect(()=>{
        fetch(`https://meningreen-backend.herokuapp.com/articles/article-detail/${articleId}`)
        .then(res=> res.json())
        .then(data => setArticleData(data))
    },[])

    document.title = articleData.title

    return (
        <>
            <div className='blog-banner'>
                
                <br/>
                <br/>
                <div className='blog-info-container'>
                    <div className='blog-text'>
                        <h1 className='blog-title'>{articleData.title}</h1>
                        <p>{articleData.para1}</p>
                        <p>{articleData.para2}</p>
                        <p>{articleData.para3}</p>
                        <p>{articleData.para4}</p>
                        <p>{articleData.para5}</p>
                        
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <div className='blog-images'>
                    <img src={articleData.card_image} alt='blog-img' className='grid-item grid-item1'></img>
                    <img src={articleData.img1} alt='blog-img' className='grid-item grid-item2'></img>
                    <img src={articleData.img2} alt='blog-img' className='grid-item grid-item3'></img>
                    <img src={articleData.img3} alt='blog-img' className='grid-item grid-item4'></img>
                </div>

                <br/>

                <div className='date-created'>
                    <h4>Date Created: {articleData.date_of_creation}</h4>
                </div>
                <br/>
            </div>
        </>
    )
}

export default Article
