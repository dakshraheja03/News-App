import React from 'react'
import spinner from '../spinner.gif'

export default function Spinner() {
  return (
        <img className='img-fluid' src={spinner} alt="loading" style={{width: "25px",height:"auto",margin: "0px",padding:"0px"}} />
  )
}
