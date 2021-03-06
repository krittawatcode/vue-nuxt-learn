import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _594a509a = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _fdfdb428 = () => interopDefault(import('../pages/users.vue' /* webpackChunkName: "pages/users" */))
const _1adc8b6f = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _709456da = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _3948fd2e = () => interopDefault(import('../pages/users/_id/moreDetail.vue' /* webpackChunkName: "pages/users/_id/moreDetail" */))
const _a92d2d84 = () => interopDefault(import('../pages/products/_pid/index.vue' /* webpackChunkName: "pages/products/_pid/index" */))
const _3b974bb6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/products",
    component: _594a509a,
    name: "products"
  }, {
    path: "/users",
    component: _fdfdb428,
    children: [{
      path: "",
      component: _1adc8b6f,
      name: "users"
    }, {
      path: ":id",
      component: _709456da,
      name: "users-id"
    }, {
      path: ":id/moreDetail",
      component: _3948fd2e,
      name: "users-id-moreDetail"
    }]
  }, {
    path: "/products/:pid",
    component: _a92d2d84,
    name: "products-pid"
  }, {
    path: "/",
    component: _3b974bb6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
