<template>
  <div class="boards">
    <router-link
      v-for="board in boards"
      class="board"
      :key="board._id"
      :to="{name: 'BoardPage', params: {boardId: board._id}}">
    </router-link>
  </div>
</template>


<script>
import boardService from '../services/board.service';

export default {
  name: 'Boards',
  data() {
    return {
      boards: [],
    };
  },
  mounted() {
    boardService.getAll()
      .then((boards) => {
        this.$set(this, 'boards', boards);
      }).bind(this);
  },
};
</script>

<style lang="scss" scoped>
.boards {
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
}
.board {
  border-radius: 3px;
  color: #ffffff;
  display: block;
  text-decoration: none;
  width: 15%;
  min-width: 150px;
  min-height: 80px;
  padding: 10px;
  background-color: rgb(0,121,191);
  margin: 0 15px 15px 0;
}
</style>
