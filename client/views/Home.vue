<template>
	<pageContent pageTitle="home">
		<counter></counter>
		<p>
		To get started, editvsv files in <code>./client</code> and save.
		</p>
	</pageContent>
</template>

<script>
import Counter from 'components/Counter'
import pageContent from 'components/pageContent'

export default {
  components: {
    Counter,
    pageContent
  }
}
</script>
