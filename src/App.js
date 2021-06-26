import "./App.css";
import Navebar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "Jenny", age: 30 };
  const boo = true;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <Navebar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
