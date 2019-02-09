<template>
  <div class="modal">
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
  width: calc(100vw - 100px);
  height: calc(100vh - 100px);
  border-radius: 10px;
  background-color: #F5F7FA;
  overflow: hidden;
}

@media only screen and (min-width: 600px) {
  .modal {
    width: 500px;
  }
}

@media only screen and (max-width: 300px) {
  .modal {
    width: 200px;
  }
}
</style>