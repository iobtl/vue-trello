<template>
  <div class="text-left ml-4 font-sans">
    <div class="text-white text-2xl font-bold">
      <h1>{{$route.params.name}}</h1>
    </div>
    <div
      v-if="!formCreation"
      class="bg-gray-600 hover:bg-gray-700 bg-opacity-50 pointer-cursor container rounded cursor-pointer text-center text-base h-8 w-56 px-2 py-1 mt-2 text-white font-normal"
      @click="triggerCreation"
    >Create new list</div>
    <form
      v-else
      @submit.prevent="createList"
      class="container rounded shadow-md mt-2 mx-left w-56 bg-white"
    >
      <span>
        <input
          class="shadow appearance-none border rounded w-48 m-2 py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
          v-model="listName"
          placeholder="Enter list name"
        />
      </span>
      <div>
        <button
          class="bg-vue hover:bg-green-700 align-left w-1/8 text-white font-bold font-sans rounded px-4 py-2 mx-2 mb-2"
          type="submit"
        >Create</button>
        <span class="text-xl ml-2 cursor-pointer" @click="triggerCreation">&#x2715;</span>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listName: "",
      formCreation: false
    };
  },
  methods: {
    createList() {
      this.listName = "";
    },
    triggerCreation() {
      this.formCreation = !this.formCreation;
    }
  }
};
</script>
