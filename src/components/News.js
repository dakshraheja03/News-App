import React,{useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default function News(props) {
    const [data, setdata] = useState([])
    const [page, setpage] = useState(1)
    const [load, setload] = useState(false)
    const getApiData = async () => {
        props.progressSet(10)
        setload(true)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=2307b3a632e744e3bbe174e17ed4965c&category=${props.category}&page=${page}&pageSize=${props.pageSize}`
        ).then((response) => response.json());
        props.progressSet(50)
        setdata(response);
        setload(false)
        props.progressSet(100)
      };
      useEffect(() => {
        window.scrollTo(0, 0)
        getApiData();
         // eslint-disable-next-line
        },[page,document.location.href])
    
        const handlePrev=async ()=>{
            setpage(page-1)
            }
        const handleNext=async ()=>{
            setpage(page+1)
            }
            document.body.style.backgroundColor="black"
  return (
    <>
    <h1 className='text-center text-white' style={{marginTop:'70px'}}>News- Top Headlines</h1>
    <div className='text-center' style={{height:"15px",marginTop:"15px"}}>
            {load && <Spinner/>}
    </div>
        <div className="container text-center">
            <div className="row">
            {!load && data.articles && data.articles.map((element)=>{
                return <div className="col-md-4 my-4" key={element.url} >
                            <NewsItem title={element.title} context={element.description} url={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
            })}
            </div>
        </div>
        <div className="d-flex justify-content-between my-4">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrev}>&larr; Prev</button>
        <button disabled={page+1 >Math.ceil(data.totalResults/20)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
        </div>
    </>
  )
}