<template>
  <sign-up-page></sign-up-page>
</template>

<script>
import SignUpPage from "./views/signup/SignUp.vue";
export default {
  name: "App",
  components: {
    SignUpPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
