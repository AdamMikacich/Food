<template>
  <div class="list">
    <h2 class="subtitle">Attendees</h2>
    <ul id="attendees">
      <li v-for="(attendee, index) in $store.state.modal.attendees" :key="'attendee' + index">{{ attendee.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>