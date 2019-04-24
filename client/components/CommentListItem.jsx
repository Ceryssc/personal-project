import React from 'react'

export default function CommentListItem ({comment, name, showDetails}) {
    console.log({comment})
  return (
    <div className='comment-list-item'>
       <div className="nameComment" >
        Name:{`${name} `}
       </div>
       <div ClassNsme="commentComment">
      "{`${comment} `}"
  </div>
    
      {/* <a href='#' onClick={() => showDetails(comments)}>details</a> */}
    </div>
  )
}