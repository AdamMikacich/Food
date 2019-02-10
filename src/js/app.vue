<template>
  <div class="app">
    <Calendar v-if="$store.state.view"></Calendar>
    <Modal v-if="!$store.state.view"></Modal>
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
</style>