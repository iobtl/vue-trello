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
          >Username</label
        >
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
          >Password</label
        >
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
        >
          Login
        </button>
        <button
          class="bg-vue bg-opacity-85 hover:bg-green-700 text-white font-bold rounded px-4 py-2"
          @click="switchRegister"
        >
          Sign up
        </button>
      </div>
    </form>
    <form
      v-else
      @submit.prevent="
        registerUser();
        switchRegister();
      "
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-left text-lg"
          for="username"
          >Username</label
        >
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
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          v-model="password"
          placeholder="enter your password"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 text-left
        text-lg"
          for="email"
          >Email</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="email"
          placeholder="enter your email"
        />
      </div>
      <div class="flex item-center justify-between">
        <button
          class="bg-vue bg-opacity-85 hover:bg-green-700 text-white font-bold rounded px-4 py-2 mb-4"
          type="submit"
          @click="$emit('set-message')"
        >
          Register
        </button>
        <button
          class="bg-gray-600 bg-opacity-85 hover:bg-gray-700 text-white font-bold rounded px-4 py-2 mb-4"
          @click="switchRegister"
        >
          Back
        </button>
      </div>
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