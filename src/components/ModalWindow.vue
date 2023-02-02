<template>
  <Teleport to="#modal">
    <div class="modal-window"
         v-if="show"
         @click.stop="hideWindow"
    >
      <div @click.stop class="modal-window__content">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, {emit}) {
    function hideWindow() {
      emit('update:show', false)
    }

    return {
      hideWindow,
    }
  }
}
</script>

<style scoped>
.modal-window {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}

.modal-window__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>