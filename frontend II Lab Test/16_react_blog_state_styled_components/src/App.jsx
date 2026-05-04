import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useBlog } from "./context/BlogContext";

const Navbar = styled.nav`
  background: #111827;
  color: white;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin-left: 18px;
    font-weight: 600;
  }
`;

const Page = styled.section`
  max-width: 850px;
  margin: 40px auto;
  background: white;
  padding: 35px;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const Card = styled.article`
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  border-left: 5px solid #7c3aed;
  margin: 18px 0;
`;

const Button = styled.button`
  background: #7c3aed;
  color: white;
  border: none;
  padding: 11px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  min-height: 120px;
  margin: 8px 0 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

function Header() {
  return (
    <Navbar>
      <h2>Complete Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/create">Create</Link>
        <Link to="/about">About</Link>
      </div>
    </Navbar>
  );
}

function Home() {
  return (
    <Page>
      <h1>Complete Blog Platform</h1>
      <p>This application uses React Router, Context API state management, and Styled Components.</p>
      <Link to="/blogs">View Blog Posts</Link>
    </Page>
  );
}

function Blogs() {
  const { posts } = useBlog();

  return (
    <Page>
      <h1>All Blogs</h1>
      {posts.map((post) => (
        <Card key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/blogs/${post.id}`}>Read More</Link>
        </Card>
      ))}
    </Page>
  );
}

function BlogDetails() {
  const { id } = useParams();
  const { posts } = useBlog();
  const post = posts.find((item) => item.id === Number(id));

  if (!post) {
    return <Page><h2>Blog not found.</h2></Page>;
  }

  return (
    <Page>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blogs">Back to Blogs</Link>
    </Page>
  );
}

function CreateBlog() {
  const { addPost } = useBlog();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    addPost(title, content);
    navigate("/blogs");
  };

  return (
    <Page>
      <h1>Create New Blog</h1>

      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <Input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(event) => setTitle(event.target.value)}
        />

        <label>Blog Content</label>
        <TextArea
          value={content}
          placeholder="Enter content"
          onChange={(event) => setContent(event.target.value)}
        />

        <Button type="submit">Add Blog</Button>
      </form>
    </Page>
  );
}

function About() {
  return (
    <Page>
      <h1>About This Project</h1>
      <p>This is a complete front-end blog platform developed using React.</p>
    </Page>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
