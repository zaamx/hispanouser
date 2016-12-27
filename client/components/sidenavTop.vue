<template>
<div class="lorem">
  <md-toolbar class="md-account-header">
    <md-list class="md-transparent">
      <md-list-item class="md-avatar-list">
        <md-avatar class="md-large">
          <img src="https://placeimg.com/64/64/people/8" alt="People">
        </md-avatar>

        <span style="flex: 1"></span>

        <md-avatar>
          <img src="https://placeimg.com/40/40/people/3" alt="People">
        </md-avatar>

        <md-avatar>
          <img src="https://placeimg.com/40/40/people/4" alt="People">
        </md-avatar>
      </md-list-item>

      <md-list-item>
        <div class="md-list-text-container">
          <span>John Doe</span>
          <span>johndoe@email.com</span>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>arrow_drop_down</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </md-toolbar>
<!--   <md-toolbar class="md-large">
    <div class="md-toolbar-container">
      <h3 class="md-title"> {{ contenido }}</h3>
    </div>
  </md-toolbar> -->
  </div>
</template>
<script >
export default {
  data() {
    return{
      contenido: 'Hello Putito'
    }
  }
}
</script>