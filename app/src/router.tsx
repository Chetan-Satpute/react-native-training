import { createHashRouter } from "react-router-dom";
import Animation from "./routes/Animation";
import HOC from "./routes/HOC";
import Home from "./routes/Home";

const router = createHashRouter([
  { path: "/", element:  <Home /> },
  { path: "/hoc", element:  <HOC /> },
  { path: "/animation", element:  <Animation /> },
]);

export default router;
