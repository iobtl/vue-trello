<template>
  <div>
    <h1 class="text-5xl font-bold font-sans text-white">Vue Trello</h1>
    <login-form />
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import boardService from "../services/board";

export default {
  name: "Home",
  components: { LoginForm },
  beforeCreate() {
    const user = window.localStorage.getItem("loggedInUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      boardService.setToken(parsedUser.token);
      this.$router.push(`${parsedUser.username}`);
    }
  }
};
</script>
