import React from 'react';

const HomePage = React.lazy(() =>
  import('./Pages/HomePage/home-page.component')
);

const Login = React.lazy(() =>
  import('./Pages/Login/login.component')
);

const Register = React.lazy(() =>
  import('./Pages/Register/register.component')
);

const routes = [
    {
        name: 'HomePage',
        // type: 'AUTHENTICATED',
        path: '/',
        hidden: false,
        exact: true,
        // page: 'HomePage',
        component: HomePage,
      },
      {
        name: 'Login',
        // type: 'UNAUTHENTICATED',
        path: '/login',
        hidden: false,
        exact: true,
        // page: 'landingPage',
        component: Login,
      },
      {
        name: 'Register',
        // type: 'UNAUTHENTICATED',
        path: '/register',
        hidden: false,
        exact: true,
        // page: 'landingPage',
        component: Register,
      },
];

export default routes;
