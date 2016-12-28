<template>
  <md-layout >
    <md-card md-with-hover>
      <md-card-media>
        <img src="happy-woman-40s.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>
        <div class="md-title">{{ item.title }}</div>
        <div class="md-subhead">{{ item.subtitle }}</div>
      </md-card-header>

      <md-card-content>
        {{ item.description }}
      </md-card-content>

      <md-card-actions>
        <md-button v-for="action in item.actions" v-on:click="action.callback">
          {{ action.title }}
        </md-button>
      </md-card-actions>
    </md-card>
  <md-layout>
</template>
<script >
export default {
  props: ['item'],
  methods: {
      open() {
        console.log('clickaso')
      }
    }
  }
</script>