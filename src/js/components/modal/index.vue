<template>
  <div
    class="modal"
    :class="{hide: $store.state.view == 0}"
  >
    <Header></Header>
    <Content></Content>
    <!-- Hide the actions bar if the settings modal is open -->
    <Actions v-if="$store.state.selectedEvent != null"></Actions>
  </div>
</template>

<script>
import Header from './header.vue';
import Content from './content/index.vue';
import Actions from './actions.vue';

/**
 * The modal consists of a header, content, and action bar from top to bottom
 */
export default {
  components: {
    Header,
    Content,
    Actions
  }
};
</script>

<style>
.modal {
  position: absolute;
  width: calc(100vw - 40px);
  height: calc(100vh - 100px);
  border-radius: 10px;
  background-color: #F5F7FA;
  overflow: hidden;
  z-index: 10;
  transition: all 0.5s;
}

@media only screen and (min-width: 540px) {
  .modal {
    width: 500px;
  }
}

@media only screen and (max-width: 240px) {
  .modal {
    width: 200px;
  }
}
</style>