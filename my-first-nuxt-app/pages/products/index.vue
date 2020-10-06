<template>
  <div>
    <h1>All Product</h1>
    <nuxt-link to='/products/11'>Product 11</nuxt-link>
    <nuxt-link to='/products/22'>Product 22</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: "",
    };
  },
  methods: {
    // onLoadUser(){
    //     this.$router.push('/users/' + this.userId)
    // }
  },
};
</script>