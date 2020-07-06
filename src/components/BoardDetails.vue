<template>
  <div class="text-left ml-4 font-sans">
    <div class="text-white text-2xl font-bold">
      <h1>{{$route.params.boardName}}</h1>
    </div>
    <div class="grid grid-flow-row grid-cols-4 row-span-4">
      <div
        v-for="(list, index) in lists"
        :key="index"
        class="container rounded text-center cursor-pointer flex-none h-32 w-56 bg-gray-600 hover:bg-gray-700 bg-opacity-50 mt-4 text-white font-sans font-bold py-2"
      >{{ list }}</div>
    </div>
    <div
      v-if="!formCreation"
      class="bg-gray-600 hover:bg-gray-700 bg-opacity-50 pointer-cursor container rounded cursor-pointer text-center text-base h-8 w-56 px-2 py-1 mt-2 text-white font-bold"
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
import boardService from "../services/board";

const retrieveLists = async boardName => {
  const board = await boardService.getOne(boardName);
  return board;
};

export default {
  data() {
    return {
      lists: [],
      listName: "",
      formCreation: false
    };
  },
  methods: {
    createList() {
      boardService
        .createList(this.$route.params.boardName, this.listName)
        .then(() => {
          this.listName = "";
        });
    },
    triggerCreation() {
      this.formCreation = !this.formCreation;
    }
  },
  beforeCreate() {
    retrieveLists(this.$route.params.boardName).then(returnedBoard => {
      this.lists = returnedBoard.lists;
    });
  },
  beforeUpdate() {
    retrieveLists(this.$route.params.boardName).then(returnedBoard => {
      this.lists = returnedBoard.lists;
    });
  }
};
</script>
