
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayoutHome.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/arma3-fov-calculator',
    component: () => import('layouts/MainLayoutArma.vue'),
    children: [
      { path: '', component: () => import('pages/Arma.vue') }
    ]
  },
  {
    path: '/forza-calculator',
    component: () => import('src/layouts/MainLayoutForza.vue'),
    children: [
      { path: '', component: () => import('pages/Forza.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
