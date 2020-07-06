<template>
  <div class="container w-full max-w-m">
    <nav class="flex items-start ml-4">
      <div
        class="rounded font-sans font-bold text-white hover:text-green-400 px-2 py-1 mb-8 bg-gray-600 hover:bg-gray-700 bg-opacity-50 cursor-pointer"
        @click="logout"
      >Logout</div>
    </nav>

    <div class="flex ml-2">
      <span class="ml-2">
        <img src="https://img.icons8.com/pastel-glyph/2x/person-male.png" width="32" />
      </span>
      <h2 class="text-left text-white font-sans font-bold text-xl ml-2">Personal Boards</h2>
    </div>
    <div class="grid grid-flow-row grid-cols-4 row-span-4">
      <div
        v-for="(board, index) in boards"
        :key="index"
        class="container rounded text-center cursor-pointer flex-none w-auto h-32 max-w-xs bg-gray-600 hover:bg-gray-700 bg-opacity-50 mt-4 ml-4 text-white font-sans font-bold py-2"
        @click="enterBoard(board)"
      >{{ board }}</div>
    </div>
    <div v-if="!creation" class="flex">
      <button
        class="bg-gray-600 bg-opacity-50 min-w-1/8 w-1/8 mt-4 ml-4 hover:bg-gray-700 text-white font-bold font-sans rounded px-4 py-2"
        @click="triggerCreation"
      >Create new board</button>
    </div>
    <div v-else>
      <form class="flex-wrap justify-start w-48 mt-4 ml-4" @submit.prevent="createNewBoard">
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          v-model="boardName"
          type="text"
          placeholder="Board name"
        />
        <button
          class="bg-gray-600 bg-opacity-50 align-left w-1/8 mt-4 mr-6 bg-opacity-85 hover:bg-gray-700 text-white font-bold font-sans rounded px-4 py-2"
          :class="{ disabled: isDisabled }"
          type="submit"
          :disabled="isDisabled"
        >Create</button>
        <button
          class="bg-gray-600 bg-opacity-50 align-left w-1/8 mt-4 bg-opacity-85 hover:bg-gray-700 text-white font-bold font-sans rounded px-4 py-2"
          @click="triggerCreation"
        >Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import boardService from "../services/board";

const retrieveBoards = async () => {
  const currentUser = window.localStorage.getItem("loggedInUser");
  if (currentUser) {
    const userId = JSON.parse(currentUser).id;
    const userBoards = await boardService.getAll(userId);
    return userBoards.map(board => board.title);
  }
};

export default {
  name: "boards-page",
  data() {
    return {
      boards: [],
      creation: false,
      boardName: ""
    };
  },
  methods: {
    triggerCreation() {
      this.creation = !this.creation;
      this.boardName = "";
    },
    createNewBoard() {
      boardService.create(this.boardName);
      this.boardName = "";
      this.creation = false;
    },
    enterBoard(boardName) {
      const currentUser = this.$route.params.user;
      this.$router.push(`${currentUser}/boards/${boardName}`);
    },
    logout() {
      window.localStorage.clear();
      boardService.setToken(null);
      this.$router.push("/");
    }
  },
  computed: {
    isDisabled() {
      return this.boardName.length === 0;
    }
  },
  beforeCreate() {
    retrieveBoards().then(returnedBoards => {
      this.boards = returnedBoards;
    });
  },
  beforeUpdate() {
    retrieveBoards().then(returnedBoards => {
      this.boards = returnedBoards;
    });
  }
};
</script>

<style scoped>
.disabled {
  color: lightgray;
}
</style>
