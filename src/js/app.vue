<template>
  <div class="app">
    <Nav></Nav>
    <div class="center">
      <Calendar></Calendar>
      <Modal></Modal>
    </div>
  </div>
</template>

<script>
import Nav from './components/nav/index.vue';
import Calendar from './components/calendar/index.vue';
import Modal from './components/modal/index.vue';

/**
 * The app component creates the layout for the three major components
 */
export default {
  components: {
    Nav,
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
}

.center {
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  cursor: pointer;
  height: 50px;
  border-radius: 5px;
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

.hide {
  transform: scale(0);
  bottom: 0;
  opacity: 0;
}
</style>