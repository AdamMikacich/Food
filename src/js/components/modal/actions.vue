<template>
  <div class="actions">
    <button class="btn" id="view" @click="view">{{ $store.state.modal.view ? 'View Info' : 'View List'}}</button>
    <button class="btn" id="register" @click="register">{{ $store.state.modal.registered ? 'Deregister' : 'Register'}}</button>
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