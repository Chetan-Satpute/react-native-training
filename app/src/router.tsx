import {createBrowserRouter} from 'react-router-dom';

import Animation from './routes/Animation';
import HOC from './routes/HOC';
import Home from './routes/Home';

export const ROUTES = {
  HOME: '/',
  HOC: '/hoc',
  ANIMATION: '/animation',
};

const router = createBrowserRouter([
  {path: ROUTES.HOME, element: <Home />},
  {path: ROUTES.HOC, element: <HOC />},
  {path: ROUTES.ANIMATION, element: <Animation />},
]);

export default router;
