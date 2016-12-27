<template>
  <div class="page-content">
    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header md-warn">
      <md-button class="md-icon-button nav-trigger" @click="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <div class="md-title" style="flex: 1"> Hispanoclub - {{ pageTitle }}</div>


      <md-menu md-align-trigger md-offset-y="25">
        <md-avatar  md-menu-trigger>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>
        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-whiteframe>

    <div class="header-visual">
      <div class="contenido">
        <h1 class="md-display-1 padding-m-top padding-m-bottom">
          {{ pageTitle }}
        </h1>
        <p class="md-subheading">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi labore recusandae corporis possimus, facilis veritatis ut dolore, voluptate mollitia.
        </p>
      </div>
      


    </div>


    <div class="contenido">
      <slot></slot>  
    </div>
  </div>
</template>

<style lang="scss">
@import '../stylesheets/mixins/_spacing.scss';


.header-visual {
  background-image: url('/../happy-woman-40s.jpg');
  background-size: cover;
  height:200px;
  position: relative;
  // color:white;
  // &:before {
  //   content:'';
  //   position: absolute;
  //   top:0;
  //   left:0;
  //   width:100%;
  //   height:100%;

  //   background:transparentize(black, 0.6);
  // }
}

</style>

<script>

import App from './App'
  
  export default {
    props: {
      pageTitle: String,
    }
    , methods: {
      toggleSidenav() {
        // console.log('esto es ', this.$root.$options.methods)
        this.$root.toggleSidenav();
      } 
    }
  }
</script>
