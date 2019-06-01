<template>
  <div class="info">
    <h2 class="subtitle">Info</h2>
    <ul>
      <!-- Time of the event -->
      <li>
        <i class="fas fa-clock"></i>
        <div>
          <div>{{ (new Date($store.getters.currentEvent.startDate)).toDateString() }}</div>
          <div>{{ $store.getters.currentEvent.time }}</div>
        </div>
      </li>
      <!-- Type of food and who is bringing it -->
      <li>
        <i class="fas fa-utensils"></i>
        <div>
          <div>{{ $store.getters.currentEvent.provider }}</div>
          <div>{{ $store.getters.currentEvent.type }}</div>
        </div>
      </li>
      <!-- Number of attendees -->
      <li>
        <i class="fas fa-user-circle"></i>
        <div>
          <div><span>{{ $store.getters.currentEvent.attendees.length }}</span> Total Attendees</div>
          <div><span>{{ $store.getters.countGF }}</span> are Gluten Free</div>
          <div><span>{{ $store.getters.countV }}</span> are Vegetarian</div>
        </div>
      </li>
      <!-- Display whether user is registered for the event or not -->
      <li v-if="$store.getters.currentEvent.registered === true">
        <i class="fas fa-check status success"></i>
        <div>
          <div><span>Registered</span> Successfully</div>
        </div>
      </li>
      <li v-else>
        <i class="fas fa-times status failure"></i>
        <div>
          <div><span>Not</span> Registered</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.info li:not(:last-child) {
  padding-bottom: 20px;
}

.info li > i {
  vertical-align: top;
  margin-right: 10px;
  font-size: 25px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #63A2D7;
  border-radius: 40px;
  color: #fff;
}

.info li > i.status {
  vertical-align: middle;
}

.info li > i.status.success {
  background-color: #38C172;
}

.info li > i.status.failure {
  background-color: #DC3030;
}

.info li > div {
  display: inline-block;
}

.info li span {
  color: #5F6B7A;
  font-weight: bold;
}
</style>