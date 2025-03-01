import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./conetext/DataContext";

const Home = () => {
  const { searchResults, fetchError, isLoading } =useContext(DataContext)
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
      
          {fetchError}
        </p>
      )}
      {!isLoading && !fetchError && (searchResults.length ? 
       <Feed posts={searchResults} />
       : 
       <p className="statusMsg">No posts to Display</p>
      )}
    </main>
  );
};

export default Home;
