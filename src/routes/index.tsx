import { createBrowserRouter } from 'react-router';

//Pages
import Home from '@/pages/Home';
import RegisterPage from '@/pages/RegisterPage';
import LoginPage from '@/pages/LoginPage';
import AuthSyncPage from '@/pages/AuthSyncPage';
import InboxPage from '@/pages/InboxPage';

// Layouts
import RootLayout from '@/layouts/RootLayout';
import AppLayout from '@/layouts/AppLayout';

// Error
import RootErrorBoundary from '@/pages/RootErrorBoundary';

import type { RouteObject } from 'react-router';

const rootRouterChildren: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'auth-sync',
    element: <AuthSyncPage />,
  },
];

const appRouteChildren: RouteObject[] = [
  {
    path: 'inbox',
    element: <InboxPage />,
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: rootRouterChildren,
  },

  {
    path: '/app',
    element: <AppLayout />,
    children: appRouteChildren,
  },
]);

export default router;
