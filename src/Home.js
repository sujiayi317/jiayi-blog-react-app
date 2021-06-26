const Home = () => {
  const handleClick = (e) => {
    console.log("Hi", e);
  };
  const handleClickAgain = (name, e) => {
    console.log("hi " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("name", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
