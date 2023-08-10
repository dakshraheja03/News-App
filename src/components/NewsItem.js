import React from 'react'

export default function NewsItem(props) {
  return (
    <>
    <div className="container" style={{display: 'flex',justifyContent:'end'}}>
    <span className="badge text-bg-dark" style={{position: 'relative',top: '10px',left:'12px','zIndex': '1'}}>{props.source}</span>
    </div>
    <div className="card" style={{backgroundColor:"#404040",border:"1px white solid"}}>
        <img src={props.url?props.url:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6RDG4JS6XNJYP62ICIWA44NIWA_size-normalized.jpg&w=1440"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-white">{props.title?props.title.slice(0,45):""}...</h5>
            <p className="card-text text-white">{props.context?props.context.slice(0,88):""}...</p>
            <p className="card-text"><small className="text-body-secondary" style={{color: '#FFFFF0',fontStyle:'italic'}}>By {props.author?props.author:'Unknown'} | Last updated {new Date(props.date).toGMTString()}</small></p>
            <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
        </div>
    </div>
    </>
  )
}
