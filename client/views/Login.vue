<template>
	<div id="login">
		<div class="login-block">
			<md-card>
				<md-card-media>
					<img class="logo" src="logo-big-big.png" alt="People">
				</md-card-media>

				<md-card-header>
					<div class="md-title">
						Ingresa a tu cuenta Hispano Club
					</div>
					<div class="md-subhead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, consectetur.
					</div>
				</md-card-header>

				<md-card-content>
					<md-button class="md-raised md-primary">Ingresa con tu cuenta de Facebook</md-button>
					<hr>
					O ingresa con tu cuenta Hispano Club:

					<form novalidate @submit.stop.prevent="submit">
						<md-input-container>
							<label>Usuario</label>
							<md-input placeholder="Usuario: Ej. Juan Perez"></md-input>
						</md-input-container>
						<md-input-container md-has-password>
							<label>Contraseña</label>
							<md-input type="password"></md-input>
						</md-input-container>
					</form>
					<p>
						<a href="">¿Olvidaste tu contraseña?</a>
					</p>
				</md-card-content>
				<md-card-actions>
					<md-button>Cancelar</md-button>
					<router-link to="/registro">
						<md-button>
							Registrar
						</md-button>
					</router-link>
					
					<md-button class="md-raised md-primary">Ingresar</md-button>
				</md-card-actions>
			</md-card>
			<br>

			<ctaAunNo>
			
		</div>
		
		
	</div>
</template>
<style lang="scss">
	$bg: #cbcbc;
	#login {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height:100vh;
		background:url('/../gplaypattern.png') repeat;
		.login-block {
			min-width: 40%;
			img.logo {
				display:block;
				max-width:200px;
				margin:0 auto;
				padding:10px;
			}
		}
	}	
</style>


<script>
import ctaAunNo from 'components/ctaAunNo'

export default {
	components: {
		ctaAunNo
	}
}
</script>
