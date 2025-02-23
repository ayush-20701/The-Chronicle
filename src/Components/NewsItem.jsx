import React from 'react'
import './Styles/NewsItem.css'
export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, date, source } = props;
  const newDate = new Date(date).toGMTString();
  
  return (
    <div className='newsCard'>
      <div className="image">
        <img 
          src = {!imageUrl
            ? "https://i.sstatic.net/y9DpT.jpg"
            : imageUrl
          }
          alt='...'
        />
        <div className="source">{source}</div>
      </div>
      <div className="container1">
        <div className="headline">{title.split(" - ")[0]}</div> 
        <div className="desc">{description}</div>
        <div className="container2">
          <span>{newDate}</span>
          <button onClick={() => window.open(newsUrl, '_blank')}>Read More</button>
        </div>
      </div>
    </div>
  )
}
