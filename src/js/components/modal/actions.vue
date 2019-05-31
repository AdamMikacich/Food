<template>
  <div class="actions">
    <button class="btn" id="view" @click="view">{{ $store.state.modal.view ? 'View Info' : 'View List'}}</button>
    <button class="btn" id="register" @click="register">{{ $store.getters.currentEvent.registered ? 'Deregister' : 'Register'}}</button>
  </div>
</template>

<script>
export default {
  methods: {
    view: function() {
      this.$store.commit('changeView');
    },
    register: function() {
      this.$store.commit('changeRegister');
    }
  }
};
</script>

<style>
.actions {
  border-bottom: solid 1px #CFD6DE;
}

.actions > .btn {
  width: calc(50% - 30px);
  position: absolute;
  bottom: 20px;
}

#view {
  left: 20px;
}

#register {
  right: 20px;
}
</style>