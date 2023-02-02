import {Link} from 'react-router-dom';

import {ROUTES} from '../router';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to={ROUTES.ANIMATION}>
        <button>Animation Example</button>
      </Link>
      <Link to={ROUTES.HOC}>
        <button>Higher Order Component Example</button>
      </Link>
    </div>
  );
}

export default Home;
