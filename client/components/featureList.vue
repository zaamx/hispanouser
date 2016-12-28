<template>
	<md-layout md-gutter>
		<featureItem v-for="feature in features" :item="feature">
	<md-layout>
</template>

<script >
	import featureItem from 'components/featureItem'

	export default {
		data: function () {
			return {
				features : this.$store.state.features
			}
		},
		components: {
			featureItem
		}
	}
</script>