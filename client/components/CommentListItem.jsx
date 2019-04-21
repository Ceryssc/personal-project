import React from 'react'

export default function CommentListItem ({comment, showDetails}) {
    console.log({comment})
  return (
    <div className='widget-list-item'>
       {`${comment} `}
      <a href='#' onClick={() => showDetails(comments)}>details</a>
    </div>
  )
}