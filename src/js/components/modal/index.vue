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
.btn {
  cursor: pointer;
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: #5F6B7A;
  font-weight: bold;
  background-color: #FFFFFF;
  border: solid 1px #CFD6DE;
  font-family: 'Roboto', sans-serif;
  transition: all 0.1s;
  font-size: 14px;
}

.modal {
  position: absolute;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  border-radius: 10px;
  background-color: #F5F7FA;
  overflow: hidden;
  z-index: 10;
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