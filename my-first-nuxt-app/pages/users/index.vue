<template>
  <div>
    <Header />
    <p>Please enter an id and click the button.</p>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  component: {
    Header
  },
  layout: "users",
};
</script>
