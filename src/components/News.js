import React from 'react'
import NewsItem from './NewsItem'

export default function News() {
    let text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  return (
        <div className="container">
            <div className="row">
                <div className="col my-4">
                <NewsItem title="First News" context={text} />
                </div>
                <div className="col my-4">
                <NewsItem title="Second News" context={text}/>
                </div>
                <div className="col my-4">
                <NewsItem title="Third News" context={text}/>
                </div>
            </div>
        </div>
  )
}
