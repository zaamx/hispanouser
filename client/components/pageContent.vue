<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header md-warn">
      <md-button class="md-icon-button nav-trigger" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <div class="md-title" style="flex: 1">{{ pageTitle }}</div>
    </md-whiteframe>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      pageTitle: String
    }
    , methods: {
      toggleSidenav() {
        // app.toggleSidenav();
        console.log('esto es ' + this.$root.toggleSidenav())
        this.$root.toggleSidenav();
      }
    }
  }
</script>