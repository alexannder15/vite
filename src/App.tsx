import { RouterProvider } from 'react-router-dom';
import { routes } from './assets/main/routes/Routes';

export default function MyApp() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
