import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to={"/animation"}>
        <button>Animation Example</button>
      </Link>

      <Link to={"/hoc"}>
        <button>Higher Order Component Example</button>
      </Link>

    </div>
  );
}

export default Home;
