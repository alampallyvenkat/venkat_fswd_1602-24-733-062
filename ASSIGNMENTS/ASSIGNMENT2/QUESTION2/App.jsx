function Header(props) {
  return <header><h1>{props.title}</h1></header>;
}

function Sidebar() {
  return <aside><h3>Sidebar</h3><p>Navigation Menu</p></aside>;
}

function Content() {
  return <main><h2>Content</h2><p>Welcome to the page layout.</p></main>;
}

function Footer() {
  return <footer><p>© 2026 My Website</p></footer>;
}

function Layout() {
  return (
    <div>
      <Header title="My React Website" />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;