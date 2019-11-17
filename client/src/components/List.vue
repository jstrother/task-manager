<template>
  <div class="board-list">
    <div class="list-inner">
      <div class="list-title" v-if="list">
        <h3>{{list.title}}</h3>
      </div>
      <div class="list-cards">
        <Card
          v-for="(card, i) in cards"
          :card-prop="card"
          :list-prop="list"
          :key="card._id"
          :index="i"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  components: {
    Card,
  },
  props: [
    'listProp',
    'index',
  ],
  data() {
    return {
      list: null,
      cards: [],
    };
  },
  mounted() {
    this.$set(this, 'list', this.listProp);
    this.$set(this, 'cards', this.listProp.cards);
  },
  method: {},
};
</script>

<style>
.list-tilte .is-editing {
  background-color: #ffffff;
  color: #000000;
}
</style>

<style lang="scss" scoped>
.list-inner {
  background-color: #dfe3e6;
  padding: 10px;
  white-space: normal;
  border-radius: 3px;
}
.board-list {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;
  vertical-align: top;
  width: 270px;
  max-height: 100%;
  overflow-y: scroll;
  &.is-dragging-list {
    transform: rotate(1deg);
  }
  &.drag-entered {
    border: 3px solid #237bda;
  }
}
</style>
