import { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);
  const [current, setCurrent] = useState(0);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        if (current > 0) {
          setCurrent((prev) => prev - 1);
        }
        break;
      case "ArrowRight":
        if (current < posts.length - 1) {
          setCurrent((prev) => prev + 1);
        }
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };
    fetchData();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentPost = posts[current];

  return (
    <div>
      <h1>Post #{current + 1} Title:</h1>

      {currentPost ? (
        <div>
          <h2>{currentPost.title}</h2>
          <p>{currentPost.body}</p>

          {/* Navigasi sederhana */}
          <div style={{ marginTop: "20px" }}>
            <button
              disabled={current === 0}
              onClick={() => setCurrent((prev) => prev - 1)}
            >
              Previous
            </button>

            <span style={{ margin: "0 15px" }}>
              {current + 1} / {posts.length}
            </span>

            <button
              disabled={current === posts.length - 1}
              onClick={() => setCurrent((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchDataEffect;
