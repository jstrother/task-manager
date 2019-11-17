<template>
  <div class="board-page-main">
    <template v-if="board">
      <div class="board-title">
        <Editable
          v-slot:default="slotProps"
          :field-value="board.title"
          @editable-submit="editableSubmitted"
        >
        <h2>{{slotProps.inputText}}</h2>
        </Editable>
      </div>
      <div class="board-lists">
        <div class="board-lists-inner">
          <List
            v-for="(list, i) in lists"
            :key="list._id"
            :index="i"
            :list-prop="list"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
/* eslint-disable no-underscore-dangle */
import boardService from '../services/board.service';
import List from './List';
import Editable from './Editable';

export default {
  name: 'BoardPage',
  components: {
    List,
    Editable,
  },
  data() {
    return {
      board: null,
      lists: [],
    };
  },
  created() {},
  mounted() {
    boardService.findById(this.$route.params.boardId)
      .then((board) => {
        this.$set(this, 'board', board);
        this.$set(this, 'lists', board.lists);
      }).bind(this);
  },
  methods: {
    editableSubmitted(inputText) {
      if (inputText === this.board.title) {
        return;
      }
      boardService.update(this.board._id, inputText).then(() => {
        this.board.title = inputText;
      });
    },
  },
};
</script>

<style>
.board-title .is-editing {
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  display: inline-block;
  min-width: 600px;
}
.add-new-list .is-editing {
  background-color: #ffffff;
  color: #000000;
  padding: 8px;
  margin: 0;
}
</style>

<style  lang="scss" scoped>
.add-new-list {
  display: inline-block;
  width: 270px;
}
.board-title {
  color: #ffffff;
  padding: 10px;
  height: 90px;
}
.board-page-main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.board-lists {
  flex-grow: 1;
  margin-bottom: 20px;
  position: relative;
}
.board-lists-inner {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: scroll;
  position: absolute;
  white-space: nowrap;
}
</style>
