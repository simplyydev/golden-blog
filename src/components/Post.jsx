import React from 'react'

    const Post = ({ title, content }) => {
      return (
        <li className="post-item">
          <h2 className="post-title">{title}</h2>
          <p className="post-content">{content}</p>
        </li>
      )
    }

    export default Post
