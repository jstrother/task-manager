<template>
  <div v-if="card" class="list-card">
    <div class="card-title">{{card.title}}</div>
    <div class="card-body">{{card.body}}</div>
  </div>
</template>

<script>
export default {
  props: [
    'cardProp',
    'listProp',
    'index',
  ],
  data() {
    return {
      card: null,
      list: null,
    };
  },
  mounted() {
    this.$set(this, 'card', this.cardProp);
    this.$set(this, 'list', this.listProp);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.card-title {
  text-decoration: underline;
}
.list-card {
  background-color: #ffffff;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  &.is-dragging-card {
    transform: rotate(1deg);
  }
  &.drag-entered {
    border: 3px solid #237bda;
  }
}
</style>
