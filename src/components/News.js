import React,{useState, useEffect} from 'react'
import NewsItem from './NewsItem'

export default function News() {
    const [data, setdata] = useState([])
    const getApiData = async () => {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=39cda8a8d8ba46e49b3d796b9ea90348"
        ).then((response) => response.json());
        setdata(response);
      };
      useEffect(() => {
        getApiData();
        }, [])
  return (
    <>
    <h1 className='my-2 mx-2'>News- Top Headlines</h1>
        <div className="container text-center">
            <div className="row">
            {data.articles && data.articles.map((element)=>{
                return <div className="col-md-4 my-4" key={element.url} >
                            <NewsItem title={element.title} context={element.description} url={element.urlToImage} newsUrl={element.url} />
                        </div>
            })}
            </div>
        </div>
    </>
  )
}
