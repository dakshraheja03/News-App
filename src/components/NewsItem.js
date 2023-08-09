import React from 'react'

export default function NewsItem(props) {
  return (
    <>
    <div className="card" style={{width: "18rem"}}>
        <img src={props.url?props.url:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6RDG4JS6XNJYP62ICIWA44NIWA_size-normalized.jpg&w=1440"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title?props.title.slice(0,45):""}...</h5>
            <p className="card-text">{props.context?props.context.slice(0,88):""}...</p>
            <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Go somewhere</a>
        </div>
    </div>
    </>
  )
}
