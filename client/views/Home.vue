<template>
	<pageContent pageTitle="Mi membresía">

		<md-layout md-gutter >
			<!-- <md-layout md-flex-offset="25" md-flex="50"> -->
			<md-layout>
				<md-card md-with-hover>
					<md-card-media>
						<img src="happy-woman-40s.jpg" alt="People">
					</md-card-media>

					<md-card-header>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/5" alt="People">
							<!-- <img src="assets/avatar.png" alt="People"> -->
						</md-avatar>

						<div class="md-title">Llama al Doctor</div>
						<div class="md-subhead">Subtitle here</div>
					</md-card-header>

					<md-card-content>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
					</md-card-content>

					<md-card-actions>
						<md-button>Action</md-button>
						<md-button>Action</md-button>
					</md-card-actions>
				</md-card>
			</md-layout>
			<md-layout>
				<md-card md-with-hover>
					<md-card-media>
						<img src="happy-woman-40s.jpg" alt="People">
					</md-card-media>

					<md-card-header>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/5" alt="People">
							<!-- <img src="assets/avatar.png" alt="People"> -->
						</md-avatar>

						<div class="md-title">Llama al Doctor</div>
						<div class="md-subhead">Subtitle here</div>
					</md-card-header>

					<md-card-content>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
					</md-card-content>

					<md-card-actions>
						<md-button>Action</md-button>
						<md-button>Action</md-button>
					</md-card-actions>
				</md-card>
			</md-layout>
			<md-layout>
				<md-card md-with-hover>
					<md-card-media>
						<img src="happy-woman-40s.jpg" alt="People">
					</md-card-media>

					<md-card-header>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/5" alt="People">
							<!-- <img src="assets/avatar.png" alt="People"> -->
						</md-avatar>

						<div class="md-title">Llama al Doctor</div>
						<div class="md-subhead">Subtitle here</div>
					</md-card-header>

					<md-card-content>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
					</md-card-content>

					<md-card-actions>
						<md-button>Action</md-button>
						<md-button>Action</md-button>
					</md-card-actions>
				</md-card>
			</md-layout>
			
		</md-layout>

		<h1 class="md-display-1 padding-m-top padding-m-bottom">Mis tarjetas</h1>

		<md-list class="custom-list md-triple-line">
					<md-list-item>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/1" alt="People">
						</md-avatar>

						<div class="md-list-text-container">
							<span>Ali Connors</span>
							<span>Brunch this weekend?</span>
							<p>I'll be in your neighborhood doing errands...</p>
						</div>

						<md-button class="md-icon-button md-list-action">
							<md-icon class="md-primary">star</md-icon>
						</md-button>

						<md-divider class="md-inset"></md-divider>
					</md-list-item>

					<md-list-item>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/6" alt="People">
						</md-avatar>

						<div class="md-list-text-container">
							<span>me, Scott, Jennifer</span>
							<span>Summer BBQ</span>
							<p>Wish I could come, but I'm out of town ...</p>
						</div>

						<md-button class="md-icon-button md-list-action">
							<md-icon>star_border</md-icon>
						</md-button>

						<md-divider class="md-inset"></md-divider>
					</md-list-item>

					<md-list-item>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/5" alt="People">
						</md-avatar>

						<div class="md-list-text-container">
							<span>Sandra Adams</span>
							<span>Oui oui</span>
							<p>Do you have Paris recommendations ...</p>
						</div>

						<md-button class="md-icon-button md-list-action">
							<md-icon>star_border</md-icon>
						</md-button>

						<md-divider class="md-inset"></md-divider>
					</md-list-item>

					<md-list-item>
						<md-avatar>
							<img src="https://placeimg.com/40/40/people/8" alt="People">
						</md-avatar>

						<div class="md-list-text-container">
							<span>Trevor Hansen</span>
							<span>Order confirmation</span>
							<p>Thank you for your recent order from ...</p>
						</div>

						<md-button class="md-icon-button md-list-action">
							<md-icon>star_border</md-icon>
						</md-button>

						<md-divider class="md-inset"></md-divider>
					</md-list-item>
				</md-list>
		
	</pageContent>
</template>



<script>import pageContent from 'components/pageContent'

export default {
	components: {
		pageContent
	}
}
</script>
