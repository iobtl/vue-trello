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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.disabled {
  color: lightgray;
}
</style>