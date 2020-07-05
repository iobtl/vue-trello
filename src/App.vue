<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import boardService from './services/board';

export default {
  name: 'App',
  components: {},
  beforeCreate() {
    const user = window.localStorage.getItem('loggedInUser');
    if (user) {
      const parsedUser = JSON.parse(user);
      boardService.setToken(parsedUser.token);
    }
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
