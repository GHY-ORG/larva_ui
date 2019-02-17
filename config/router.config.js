export default [
  // user
  {
    path: '/login',
    component: '../layouts/UserLayout/index.js',
    routes: [
      {
        path: '/login',
        component: './Login/index.js',
      },
    ],
  },
  {
    path: '/register',
    component: '../layouts/UserLayout/index.js',
    routes: [
      { path: '/register', component: './Register/index.js' },
      { path: '/register/result', component: './Register/Result/index.js' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout/index.js',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        hideInMenu: true,
        component: './Home/index.js',
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        component: './Dashboard/index.js',
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'settings',
        icon: 'settings',
        path: '/settings',
        hideInMenu: true,
        routes: [
          {
            path: '/settings/account',
            name: 'account',
            component: './Settings/Account/Info',
            routes: [
              {
                path: '/settings/account',
                redirect: '/Settings/Account/base',
              },
              {
                path: '/settings/account/base',
                component: './Settings/Account/BaseView',
              },
              {
                path: '/settings/account/security',
                component: './Settings/Account/SecurityView',
              },
              {
                path: '/settings/account/binding',
                component: './Settings/Account/BindingView',
              },
              {
                path: '/settings/account/notification',
                component: './Settings/Account/NotificationView',
              },
            ],
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        hideInMenu: true,
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Projects',
              },
            ],
          },
        ],
      },
      {
        name: 'post',
        icon: 'book',
        path: '/post',
        routes: [
          {
            path: '/post/',
            component: './Post/Edit/index.js',
          },
          {
            path: '/post/edit',
            component: './Post/Edit/index.js',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
