<template>
  <div id="app">
    <md-sidenav class="md-left" ref="main-sidebar">
      <!-- Top del sidebar nav -->
      <sidenavTop></sidenavTop>

      <!-- Lista de items -->
      <sidenavList></sidenavList>

    </md-sidenav>
    <div class="fab-container">
      <md-button class="md-fab">
        <md-icon>add</md-icon>
      </md-button>  
    </div>
    
    <router-view></router-view>  
  </div>
</template>
<script type="text/javascript">
  // import Vue from 'vue';

  import sidenavTop from './sidenavTop' 
  import sidenavList from './sidenavList' 



  export default {
  methods: {
    toggleSidenav() {
      this.$refs['main-sidebar'].toggle();
    },
    closeSidenav() {
      this.$refs['main-sidebar'].close();
    }
  }
  , components: {
    sidenavTop
    ,sidenavList
  }

};
</script>

<style lang="scss">
@import '../stylesheets/mixins/_spacing.scss';
@import '../stylesheets/mixins/_resetText.scss';

#app {
  display: flex;
  flex-flow: column;
}
.contenido {
  max-width:1200px;
  padding-top:20px;
  margin: 0 auto;
  flex: 1;
  flex-flow: column;
  // position: relative;
}

.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
.fab-container {
    position: fixed;
    right: 16px;
    bottom: 16px;
}
</style>
