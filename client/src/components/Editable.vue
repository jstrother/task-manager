<template>
  <div>
    <h2
      v-show="isEditting"
      ref="editableField"
      :class="{'is-editing': isEditting}"
      contenteditable="true"
      @keydown.enter="submit"
      @blur="onBlur"
      @keydown.esc="escape"
    >
      {{inputText}}
    </h2>
    <template v-if="isEditting === false">
      <div @click="onBoardTitleClick()">
        <slot
          :isEditting="isEditting"
          :inputText="inputText"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ['fieldValue'],
  data() {
    return {
      inputText: '',
      isEditting: false,
    };
  },
  mounted() {
    this.$set(this, 'inputText', this.fieldValue);
  },
  methods: {
    onBoardTitleClick() {
      this.$set(this, 'isEditting', true);
      setTimeout((() => {
        this.$refs.editableField.focus();
      }), 200);
    },
    submit(event) {
      this.$set(this, 'inputText', event.currentTarget.innerText);
      this.$emit('editable-submit', event.currentTarget.innerText);
      this.$set(this, 'iseEditing', false);
    },
    escape(event) {
      this.$set(this, 'inputText', event.currentTarget.innerText);
      this.$emit('editable-submit', event.currentTarget.innerText);
      this.$set(this, 'iseEditing', false);
    },
    onBlur(event) {
      this.$set(this, 'inputText', event.currentTarget.innerText);
      this.$emit('editable-submit', event.currentTarget.innerText);
      this.$set(this, 'iseEditing', false);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
