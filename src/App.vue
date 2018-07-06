<template>
  <div id="app">
    <p>
      <router-link to="/">Go to no chart</router-link>
      <br>
      <router-link to="/one">See one chart</router-link>
      <br>
      <router-link to="/two">Give me two charts</router-link>
    </p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
