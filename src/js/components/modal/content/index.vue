<template>
  <div class="content">
    <Info v-if="$store.state.modalListActive === false"></Info>
    <List v-if="$store.state.modalListActive === true"></List>
  </div>
</template>

<script>
import Info from './info.vue';
import List from './list.vue';

export default {
  components: {
    Info,
    List
  }
};
</script>

<style>
.content {
  margin: 0 20px;
  height: calc(100% - 190px);
  box-sizing: border-box;
  overflow: auto;
  opacity: 1;
  transition: opacity 0.5s;
}

.subtitle {
  color: #5F6B7A;
  line-height: 0;
  font-weight: bold;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  padding: 10px 0;
}
</style>