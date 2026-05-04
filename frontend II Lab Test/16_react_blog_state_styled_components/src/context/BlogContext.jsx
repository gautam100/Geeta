import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Learning HTML and CSS",
      content: "HTML gives structure to a webpage and CSS gives styling to make it attractive."
    },
    {
      id: 2,
      title: "Bootstrap for Responsive Design",
      content: "Bootstrap provides reusable components and grid system to build responsive webpages quickly."
    }
  ]);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content
    };

    setPosts([...posts, newPost]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
