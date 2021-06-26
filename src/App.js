import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  // const person = { name: "Jenny", age: 30 };
  const boo = true;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times </p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>boo</p>
        <p>{"hello"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
