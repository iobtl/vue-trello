<template>
  <div class="text-left ml-4 font-sans">
    <nav class="flex items-start">
      <div
        class="rounded font-sans font-bold text-white hover:text-green-400 px-2 py-1 mb-8 bg-gray-600 hover:bg-gray-700 bg-opacity-50 cursor-pointer"
        @click="goBack"
      >Back</div>
    </nav>
    <div class="text-white text-2xl font-bold">
      <h1>{{$route.params.boardName}}</h1>
    </div>
    <div class="grid grid-flow-row grid-cols-6 row-span-4">
      <div
        class="container rounded text-left text-white font-bold px-2 py-2 flex-none h-auto w-56 bg-gray-600 bg-opacity-75 mt-4"
        v-for="(list, index) in lists"
        :key="index"
      >
        {{ list }}
        <div
          v-if="!cardCreation"
          class="container rounded cursor-pointer text-white text-sm hover:bg-gray-700 px-1 py-1"
          @click="triggerCardCreation"
        >&#43; Add a card</div>
        <form
          v-else
          @submit.prevent="createCard"
          class="container rounded shadow-md mt-2 mx-left w-auto bg-white"
        >
          <span>
            <input
              class="shadow appearance-none border rounded w-48 m-2 py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
              v-model="cardName"
              placeholder="Enter card name"
            />
          </span>
          <div>
            <button
              class="bg-vue hover:bg-green-700 align-left w-1/8 text-white font-bold font-sans rounded px-4 py-2 mx-2 mb-2"
              type="submit"
            >Create</button>
            <span
              class="text-xl text-black ml-2 cursor-pointer"
              @click="triggerCardCreation"
            >&#x2715;</span>
          </div>
        </form>
      </div>
    </div>
    <div
      v-if="!formCreation"
      class="bg-gray-600 hover:bg-gray-700 bg-opacity-50 pointer-cursor container rounded cursor-pointer text-center text-base h-8 w-56 px-2 py-1 mt-2 text-white font-bold"
      @click="triggerFormCreation"
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
        <span class="text-xl ml-2 cursor-pointer" @click="triggerFormCreation">&#x2715;</span>
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
      cardName: "",
      formCreation: false,
      cardCreation: false
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
    createCard(currentList) {
      boardService
        .createCard(this.$route.params.boardName, currentList, this.cardName)
        .then(() => {
          this.cardName = "";
        });
    },
    triggerFormCreation() {
      this.formCreation = !this.formCreation;
    },
    triggerCardCreation() {
      this.cardCreation = !this.cardCreation;
    },
    goBack() {
      this.$router.go(-1);
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
