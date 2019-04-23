import React from 'react'

export default function CommentListItem ({comment, name, showDetails}) {
    console.log({comment})
  return (
    <div className='widget-list-item'>
         {`${name} `}
       
       {`${comment} `}
  
    
      {/* <a href='#' onClick={() => showDetails(comments)}>details</a> */}
    </div>
  )
}