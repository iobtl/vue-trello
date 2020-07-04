<template>
  <div class="text-left ml-4 font-sans">
    <div class="text-white text-2xl font-bold">
      <h1>{{$route.params.name}}</h1>
    </div>
    <div
      class="bg-gray-600 hover:bg-gray-700 bg-opacity-50 pointer-cursor container rounded cursor-pointer text-center text-base h-8 w-48 px-2 py-1 text-white font-normal"
    >Create new list</div>
    <form @submit.prevent="createList">
      <span class>
        <input v-model="listName" placeholder="Enter list name" />
      </span>
      <div>
        <button
          class="bg-gray-600 bg-opacity-50 align-left w-1/8 mt-2 bg-opacity-85 hover:bg-gray-700 text-white font-bold font-sans rounded px-4 py-2"
          type="submit"
        >Create</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listName: ""
    };
  },
  methods: {
    createList() {
      this.listName = "";
    }
  }
};
</script>