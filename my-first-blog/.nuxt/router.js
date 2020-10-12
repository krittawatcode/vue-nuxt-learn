import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ee8ab3c6 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _1c67b91b = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _3ca4f3d2 = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages/posts/index" */))
const _016d9e33 = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _538a3ce4 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _119c301f = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages/admin/_postId/index" */))
const _1824053a = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages/posts/_id/index" */))
const _7086518a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _ee8ab3c6,
    name: "about"
  }, {
    path: "/admin",
    component: _1c67b91b,
    name: "admin"
  }, {
    path: "/posts",
    component: _3ca4f3d2,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _016d9e33,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _538a3ce4,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _119c301f,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _1824053a,
    name: "posts-id"
  }, {
    path: "/",
    component: _7086518a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
