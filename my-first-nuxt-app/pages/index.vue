<template>
  <section class="container">
    <!-- we dont use <a> </a> because it will send new request to server -->
    <!-- <a href="/users">Users</a>  -->
    <nuxt-link to="/users">Users</nuxt-link>
    <!-- <button @click="$router.push('products')">Products</button> -->
    <!-- <nuxt-link to="/products">Products</nuxt-link> -->
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
export default {
}
</script>
