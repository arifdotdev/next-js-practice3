import React from "react";

const getPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json()
}

const PostPage = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

    const posts = await getPosts()

  return (
    <div>
      <h2>Hello post: {posts.length}</h2>
    </div>
  );
};

export default PostPage;
