import { createBrowserRouter } from 'react-router';

//Pages
import Home from '@/pages/Home';

// Layouts
import RootLayout from '@/layouts/RootLayout';

// Error
import RootErrorBoundary from '@/pages/RootErrorBoundary';

import type { RouteObject } from 'react-router';

const rootRouterChildren: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouterChildren,
  },
]);

export default router;
