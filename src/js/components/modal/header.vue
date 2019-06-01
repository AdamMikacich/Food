<template>
  <div class="header">
    <h1 class="title">
      <!-- Change the naming of the header depending whether the settings or event modal is open -->
      {{ $store.state.selectedEvent == undefined ? 'User' : 'Build' }}
      <span id="buildNum">
        {{ $store.state.selectedEvent == undefined ? 'Settings' : $store.getters.currentEvent.buildNum }}
      </span>
    </h1>
    <i class="fas fa-times" @click="close" style="cursor: pointer;"></i>
  </div>
</template>

<script>
export default {
  methods: {
    close: function() {
      // Close to the modal and open the calendar
      this.$store.commit('view', {view: 0});
    }
  }
};
</script>

<style>

.header {
  width: 100%;
  height: 100px;
  background-color: #007bff;
}

.title {
  padding: 20px 0 0 20px;
  margin: 0;
  font-size: 15px;
  line-height: 150%;
  color: #AAD4F5;
  font-weight: bold;
}

.title > span {
  display: block;
  font-size: 40px;
  padding-top: 10px;
  color: #FFFFFF;
}

.header > i {
  position: absolute;
  color: #AAD4F5;
  font-size: 20px;
  top: 15px;
  right: 20px;
}
</style>