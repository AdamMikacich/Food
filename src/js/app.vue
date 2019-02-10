<template>
  <div class="app">
    <Calendar></Calendar>
    <Modal></Modal>
  </div>
</template>

<script>
import Calendar from './components/calendar/index.vue';
import Modal from './components/modal/index.vue';

export default {
  components: {
    Calendar,
    Modal
  }
};
</script>

<style>
body {
  background: #212934;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

div {
  color: #8895A7;
}

ul {
  list-style-type: none;
  padding: 0;
}

.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

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

.animate {
  transform: scale(0);
  bottom: 0;
  opacity: 0;
}
</style>