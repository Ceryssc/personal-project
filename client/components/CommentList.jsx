import React from 'react'


import CommentListItem from './CommentListItem'

export default function CommentList (props) {
  console.log(props)
  return (
    <div className='comment-list'>
      <h2>Comments</h2>
      {props.comments.map((comments)=> {
        return <CommentListItem
          key={comments.id}
          comment={comments.comment}
          name={comments.name}
     
          // hideDetails={props.hideDetails}
          showDetails={props.showDetails} 
          />
      })}
    </div>
  )
}