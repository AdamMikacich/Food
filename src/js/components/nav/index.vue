<template>
  <div
    class="nav"
  >
    <img src="./../../../images/254-Swoosh-White.png" />
    <h1>Cheesy Food</h1>
    <div class="dropdown">
      <h2><i class="fas fa-caret-down"></i> Hello, {{ $store.state.user.name }}</h2>
      <ul class="dropdownOptions">
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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

.dropdown h2 {
  text-align: right;
  font-size: 18px;
  color: #AAD4F5;
  cursor: pointer;
  line-height: 40px;
  margin: 0;
}

.dropdownOptions {
  display: none;
  position: absolute;
  min-width: 150px;
  box-sizing: border-box;
  padding: 5px;
  margin: 0;
  z-index: 1;
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