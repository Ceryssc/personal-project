import React from 'react'


import CommentListItem from './CommentListItem'

export default function CommentList (props) {
  console.log(props)
  return (
    <div className='widget-list'>
      <h2>List</h2>
      {props.comments.map((comments)=> {
        return <CommentListItem
          key={comments.id}
          comment={comments.comment}
          // hideDetails={props.hideDetails}
          showDetails={props.showDetails} 
          />
      })}
    </div>
  )
}