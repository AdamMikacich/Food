<template>
  <div class="nav">
    <img src="./../../../images/254-Swoosh-White.png" />
    <h1>Cheesy Food</h1>
    <div class="dropdown">
      <button ref="dropdown"><i class="fas fa-caret-down"></i> Hello, {{ $store.state.user.name }}</button>
      <ul class="dropdownOptions">
        <li @click="settings">Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
</template>

<script>
const isMobile = /iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase());

export default {
  methods: {
    settings: function() {
      this.$store.commit('view', {view: 3});
    }
  },
  mounted: function() {
    // Make the whole page clickable if on mobile; this allows users to close the dropdown by clicking anywhere else
    if (isMobile) document.body.style.cursor = 'pointer';

    // Hide the dropdown once another element on the page is clicked (for mobile support)
    document.body.addEventListener('click', (event) => {
      this.$refs.dropdown.blur();
    }, false);

    // If the dropdown element isn't a list element, then cancel the event to prevent the dropdown from being blurred
    document.querySelector('.dropdown').addEventListener('click', (event) => {
      if (event.path[0].tagName != 'LI') event.stopPropagation();
    }, true);
  }
};
</script>

<style>
.nav {
  height: 60px;
  width: 100vw;
  background-color: #007bff;
  padding: 10px 20px;
  box-sizing: border-box;
}

.nav img {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  height: 30px;
  float: left;
}

.nav h1 {
  color: white;
  font-size: 24px;
  line-height: 40px;
  margin: 0;
  float: left;
}

.dropdown {
  position: absolute;
  right: 20px;
  min-width: 150px;
}

.dropdown button {
  outline: none;
  border: none;
  width: 100%;
  background: transparent;
  text-align: right;
  font-size: 18px;
  color: #AAD4F5;
  cursor: pointer;
  line-height: 40px;
  padding: 0;
  margin: 0;
}

.dropdownOptions {
  display: none;
  position: absolute;
  min-width: 150px;
  box-sizing: border-box;
  padding: 5px;
  margin: 0;
  z-index: 20;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

.dropdownOptions li {
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  padding: 5px;
}

.dropdown:hover .dropdownOptions {
  display: block;
}
</style>