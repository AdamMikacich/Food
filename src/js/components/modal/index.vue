<template>
  <div
    class="modal"
    :class="{animate: !$store.state.view}"
  >
    <Header></Header>
    <Content></Content>
    <Actions></Actions>
  </div>
</template>

<script>
import Header from './header.vue';
import Content from './content/index.vue';
import Actions from './actions.vue';

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