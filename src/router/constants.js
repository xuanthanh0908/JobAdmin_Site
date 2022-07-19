import Home from '~/pages/Home'
import About from '~/pages/About'
import Contact from '~/pages/Contact'
const PublicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
]
const PrivateRoutes = []

export { PublicRoutes, PrivateRoutes }
