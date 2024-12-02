import React from 'react'
    import Post from './Post.jsx'

    const posts = [
      {
        id: 1,
        title: "Introduction to Golden Retrievers",
        content: "Golden Retrievers are a popular breed known for their friendly and outgoing nature. They are often used as guide dogs, search and rescue dogs, and therapy dogs."
      },
      {
        id: 2,
        title: "Training Your Golden Retriever",
        content: "Training is essential to ensure your Golden Retriever behaves well and remains a joy to be around. Positive reinforcement methods work best with this breed."
      }
    ]

    const PostList = () => {
      return (
        <ul className="post-list">
          {posts.map(post => (
            <Post key={post.id} title={post.title} content={post.content} />
          ))}
        </ul>
      )
    }

    export default PostList
