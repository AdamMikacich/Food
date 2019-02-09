<template>
  <Modal></Modal>
</template>

<script>
import Modal from './components/modal/index.vue';

export default {
  components: {
    Modal
  }
};
</script>

<style>
body {
  background: #212934;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
}

div {
  color: #8895A7;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>