import React, { useContext } from 'react'
import { contextContent } from '../contexts/ContentContext'

function ContentDiv() {
  const {content} = useContext(contextContent)
  return (
    <div className='p-2'>{
      content
    }</div>
  )
}

export default ContentDiv