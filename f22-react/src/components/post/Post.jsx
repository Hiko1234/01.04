import React from 'react'

export const Post = ({ post, ...props }) => {
  const { title, body, id } = post;
  return (
    <>
      <div
        id={id}
        style={{
          fontSize: "30px",
          padding: "20px",
          margin: "10px 0",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "25%",
        }}>
        <h1>{title}</h1>
        <p>{body}</p>
        <button onClick={() => props.delete(id)}
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "red",
            color: "#fff",
            cursor: "pointer",
          }}>Delete</button>
      </div>
    </>
  )
}

export default Post