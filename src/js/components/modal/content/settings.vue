<template>
  <div class="settings">
    <p class="question">Are you vegetarian?</p>
    <input type="radio" value="Yes" v-model="vegetarian">
    <label>Yes</label>
    <br>
    <input type="radio" value="No" v-model="vegetarian">
    <label>No</label>
    <p class="question">Are you gluten free?</p>
    <input type="radio" value="Yes" v-model="glutenFree">
    <label>Yes</label>
    <br>
    <input type="radio" value="No" v-model="glutenFree">
    <label>No</label>
  </div>
</template>

<script>
export default {
  computed: {
    vegetarian: {
      get() {
        return this.$store.state.user.v ? 'Yes' : 'No';
      },
      set(value) {
        this.$store.commit('updateUser', {key: 'v', active: value == 'Yes'});
      }
    },
    glutenFree: {
      get() {
        return this.$store.state.user.gf ? 'Yes' : 'No';
      },
      set(value) {
        this.$store.commit('updateUser', {key: 'gf', active: value == 'Yes'});
      }
    }
  }
};
</script>

<style>
.settings p {
  color: #5F6B7A;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  padding: 10px 0;
}
</style>