<template>
  <div id="app">
      <div class="container-fluid">
        <router-view name="header-top"></router-view>
            <router-view></router-view>
      </div>
  </div>
</template>

<script>
  export default {

  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container-fluid {
  padding-right:0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
  margin-top:0;

}



</style>
