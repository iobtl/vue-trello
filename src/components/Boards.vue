<template>
  <div class="flex-wrap">
    <div class="flex ml-2">
      <span>
        <img
          src="https://img.icons8.com/pastel-glyph/2x/person-male.png"
          width="32"
        />
      </span>
      <h2 class="text-left text-vue font-sans font-bold text-xl ml-2">
        Personal Boards
      </h2>
    </div>
    <div>
      <button>Create new board</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boards-page',
  data() {
    boards: [];
  },
};
</script>
