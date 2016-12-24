<template>
  <div id="app">

    <router-view></router-view>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <!-- Top del sidebar nav -->
      <sidenavTop></sidenavTop>

      <!-- Lista de items -->
      <sidenavList></sidenavList>

    </md-sidenav>
  </div>
</template>
<script type="text/javascript">
  import sidenavTop from './sidenavTop' 
  import sidenavList from './sidenavList' 

  export default {
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    },
    closeSidenav() {
      this.$refs.leftSidenav.close();
    }
  }
  , components: {
    sidenavTop
    ,sidenavList
  }

};
</script>

<style>

.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
</style>
