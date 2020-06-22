<template>
  <div class="container mx-auto w-full max-w-xs">
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      v-if="registered"
      @submit.prevent="loginUser()"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-left text-lg"
          for="username"
        >Username</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="username"
          placeholder="enter your username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-left text-lg"
          for="password"
        >Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="password"
          placeholder="enter your password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-vue bg-opacity-85 hover:bg-green-700 text-white font-bold rounded px-4 py-2"
          type="submit"
          @click="$emit('set-message')"
        >Login</button>
        <button
          class="bg-vue bg-opacity-85 hover:bg-green-700 text-white font-bold rounded px-4 py-2"
          @click="switchRegister"
        >Sign up</button>
      </div>
    </form>
    <form v-else @submit.prevent="
        registerUser();
        switchRegister();
      ">
      <p>
        <input v-model="email" placeholder="enter your email address" />
      </p>
      <p>
        <input v-model="username" placeholder="enter your username" />
      </p>
      <p>
        <input type="password" v-model="password" placeholder="enter your password" />
      </p>
      <button
        class="bg-blue-500 bg-opacity-80 hover:bg-blue-600 text-white font-bold rounded px-20 py-1 mx-1 my-2"
        type="submit"
      >Register</button>
      <p>
        <button
          class="bg-gray-500 bg-opacity-80 hover:bg-gray-600 text-white font-bold rounded px-12 py-1 mx-1"
          @click="switchRegister"
        >I have an account</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "login-form",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      users: [],
      registered: true,
      message: null
    };
  },
  methods: {
    loginUser() {
      this.username = "";
      this.password = "";
    },
    switchRegister() {
      this.registered = !this.registered;
    },
    registerUser() {
      const newUser = {
        email: this.email,
        username: this.username,
        password: this.password
      };
      this.users = this.users.concat(newUser);
      this.username = "";
      this.password = "";
    }
  }
};
</script>