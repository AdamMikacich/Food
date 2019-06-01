<template>
  <div
    class="content"
    :style="{height: $store.state.view == 3 ? 'calc(100% - 100px)' : 'calc(100% - 190px)'}"
  >
    <Info v-if="$store.state.view === 1"></Info>
    <List v-if="$store.state.view === 2"></List>
    <Settings v-if="$store.state.view === 3"></Settings>
  </div>
</template>

<script>
import Info from './info.vue';
import List from './list.vue';
import Settings from './settings.vue';

export default {
  components: {
    Info,
    List,
    Settings
  }
};
</script>

<style>
.content {
  margin: 0 20px;
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