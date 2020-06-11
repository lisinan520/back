// 登陆页面
import Login from '@/pages/admin/Login'
import Family from '@/pages/admin/Family'
import Home from '@/pages/admin/Home'
const admins = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/family',
    name: 'family',
    component: Family,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      }
    ]
  }
]

export default admins
