import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./conetext/DataContext";

const EditPost = () => {
  const {
    posts,
    handleEdit,
    editBody,
    setEditBody,
    editTitle,
    setEditTitle,
  } =useContext(DataContext)
  const { id } = useParams();
  const post = posts.find(post => (post.id)=== id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="NewPost">
      <h2>Edit Post</h2>
      {editTitle && 
        <>
          <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
          </form>
        </>
      }
       {!editTitle && 
          <>
            <h2>Page Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        }
    
    </main>
  );
};

export default EditPost;
