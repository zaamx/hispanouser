<template>
  <md-list>
    <md-list-item >
      <router-link to="/">
        <md-icon>move_to_inbox</md-icon> <span>Home</span>
      </router-link>
    </md-list-item>
    <md-list-item >
      <router-link to="/ingresar">
        <md-icon>move_to_inbox</md-icon> <span>Login</span>
      </router-link>
    </md-list-item>

    <!-- ciclo de modulos -->

    <md-list-item v-for="feature in features">
      <router-link to="{{ feature.mainroute }} ">
        <md-icon>move_to_inbox</md-icon>
        <span>{{ feature.mainroute }}</span>
      </router-link>
          
    </md-list-item>

  </md-list>
</template>
<script >

  export default {
    data: function () {
      return {
        features : this.$store.state.features
      }
    }
  }
</script>