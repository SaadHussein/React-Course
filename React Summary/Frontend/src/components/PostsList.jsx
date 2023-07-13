import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {/* <Post author="Manuel" body="Checkout the full course!" /> */}
          {posts.map((post) => (
            <Post
              key={post.body}
              author={post.author}
              body={post.body}
              id={post.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet.</h2>
          <p>Start adding some.</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
