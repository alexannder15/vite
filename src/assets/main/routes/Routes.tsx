import { createBrowserRouter } from 'react-router-dom';
import Root from '../../../presentation/components/Root';
import ErrorPage from '../../../presentation/pages/NotFoundPage';
import LoginPage from '../../../presentation/pages/LoginPage';
import RegisterPage from '../../../presentation/pages/RegisterPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);
