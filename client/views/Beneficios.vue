<template>
	<div class="te">
		<div class="cont" v-for="item in post">
		<pageContent v-bind:pageTitle=" item.title " :pageDescription="item.description">
				<md-button v-for="action in item.actions" v-on:click="action.callback">
		          {{ action.title }}
		        </md-button>
		</pageContent>
		</div>
	</div>
</template>

<script>
import pageContent from 'components/pageContent'

export default {
  data () {
    return {
      post: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
		this.post = this.$store.getters.doneTodos
    }
  },
  components: {
		pageContent
	}
}
</script>
