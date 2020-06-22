<template>
  <div>
    <h1 class="text-5xl font-bold font-sans text-white ">
      Vue Trello
    </h1>
    <login-form />
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  name: "Home",
  components: { LoginForm }
};
</script>
