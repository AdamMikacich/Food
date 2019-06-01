<template>
  <div class="actions">
    <button class="btn" id="view" @click="view">{{ $store.state.view == 1 ? 'View List' : 'View Info'}}</button>
    <button class="btn" id="register" @click="register">
      {{
        !canRegister
        ? 'Locked'
        : $store.getters.currentEvent.registered ? 'Deregister' : 'Register'
      }}
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    canRegister: function() {
      return !this.$store.getters.currentEvent.classes.includes('locked');
    }
  },
  methods: {
    view: function() {
      this.$store.commit('view', {view: this.$store.state.view == 1 ? 2 : 1});
    },
    register: function() {
      if (this.canRegister) this.$store.commit('changeRegister');
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