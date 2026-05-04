import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Introduction to Front-End Development",
    content: "Front-end development focuses on building the visible part of a website using HTML, CSS, JavaScript, and frameworks like React."
  },
  {
    id: 2,
    title: "Why React is Popular",
    content: "React is popular because it uses reusable components, virtual DOM, state management, and a strong ecosystem."
  },
  {
    id: 3,
    title: "Importance of Git",
    content: "Git helps developers track code changes, collaborate with teams, and manage project versions."
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Blog</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="page">
      <h1>Welcome to My Blog Platform</h1>
      <p>This React app uses React Router to navigate between multiple pages.</p>
      <Link className="btn" to="/blogs">Read Blogs</Link>
    </section>
  );
}

function Blogs() {
  return (
    <section className="page">
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <article className="post-card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 80)}...</p>
          <Link to={`/blogs/${post.id}`}>Read More</Link>
        </article>
      ))}
    </section>
  );
}

function BlogDetails() {
  const { id } = useParams();
  const post = posts.find((blog) => blog.id === Number(id));

  if (!post) {
    return <h2 className="page">Blog not found.</h2>;
  }

  return (
    <section className="page">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blogs">Back to Blogs</Link>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About</h1>
      <p>This blog platform is created as a front-end practical using React Router.</p>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
