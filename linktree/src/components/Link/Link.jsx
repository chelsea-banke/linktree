import { useState } from 'react'
import './Link.css'

function Link(props) {

  return (
    <a href={props.url} className='link' id={props.id}><button className='link-btn'>{props.title}</button></a>
  )
}

export default Link