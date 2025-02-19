import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spinner'
import './News.css'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News = (props) => {
    const [articles, setArticles] = useState([]) //array of articles
    const [loading, setLoading] = useState(false) //show spinner when data is being fetched
    const [page, setPage] = useState(1) 
    const [totalResults, setTotalResults] = useState(0)
    const [spinner, setSpinner] = useState(true) //hide spinner when no more data is available

    useEffect(() => {       //first step when this component is mounted
      document.title = props.category !== "general" ? `${capitalizeFirstLetter(props.category)} - The Chronicle` : "The Chronicle"; //Show category in title except for general
      updateNews(); // eslint-disable-next-line
    }, [])  //empty array means it will run only once when component is mounted
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        console.log("Update news called");
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(10)
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json();
        props.setProgress(70)
        console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100)
    };
    
    const fetchMoreData = async () => {
        console.log("fetchMoreData called");
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        
        if(parsedData.articles.length === 0){
            setSpinner(false); //hide spinner when all the articles are loaded
        }
        else{
            setTimeout(() => {
                setArticles(articles.concat(parsedData.articles)); //delay loading 0.5s to show spinner 
            }, 200);
        }
        
    }

    return (
        <div className="news">
            {loading && <Spinner />}
            {!loading && (
                <div className="heading">
                    Here are the top {capitalizeFirstLetter(props.category)} headlines!
                </div>
            )}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !==  totalResults}
                loader={spinner ? <Spinner /> : ""}
            >
                <div className="news-container">
                    {articles.map((element) => {
                        return(
                            <div className="news-item" key={element.url}>
                                <NewsItem  
                                    title={element.title ? element.title : ""} // Ensure title is passed correctly
                                    description={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    date={element.publishedAt}
                                    source={element.source.name}
                                    key={element.url}
                                />
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
export default News