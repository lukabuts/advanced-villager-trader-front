import { ROUTES } from "@/constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={ROUTES.SINGLEPLAYER}>Go to single player</Link>
    </div>
  );
};

export default Home;
