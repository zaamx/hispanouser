<template>
	<div id="login">
		<div class="login-block">
			<md-card>
				<md-card-media>
					<img class="logo" src="logo-big-big.png" alt="People">
				</md-card-media>

				<md-card-header>
					<div class="md-title">
						Registra tu cuenta Hispano Club
					</div>
					<div class="md-subhead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, consectetur.
					</div>
				</md-card-header>

				<md-card-content>

					<p>Ingresa los datos básicos para crear tu cuenta</p>
					<form novalidate @submit.stop.prevent="submit">
						<md-input-container>
							<label>Usuario</label>
							<md-input placeholder="Ej: usuario00"></md-input>
						</md-input-container>
						<md-input-container>
							<label>Correo electrónico</label>
							<md-input placeholder="Correo electrónico: usuario@dominio.com"></md-input>
						</md-input-container>

						<md-layout>
							<md-layout >
								<md-input-container >
									<label>Nombre</label>
									<md-input placeholder="Nombre: Ej.Juan"></md-input>
								</md-input-container>
							</md-layout>
							<md-layout >
								<md-input-container>
									<label>Apellido</label>
									<md-input placeholder="Apellido: Ej. Perez"></md-input>
								</md-input-container>
							</md-layout>
						</md-layout>

						<md-input-container>
							<label>Teléfono</label>
							<md-input placeholder="Teléfono: 55 5555 5555"></md-input>
						</md-input-container>
						<md-input-container>
							<label>Fecha de nacimiento dia mes año</label>
							<md-input placeholder="Edad: 18"></md-input>
						</md-input-container>
						<md-input-container>
							<label>Número de tarjeta Hispano Club</label>
							<md-input placeholder="Tarjeta Hispano Club: 5555 5555 5555 5555"></md-input>
						</md-input-container>
						<md-input-container md-has-password>
							<label>Contraseña</label>
							<md-input type="password"></md-input>
						</md-input-container>

						<md-input-container md-has-password>
							<label>Confirma tu contraseña</label>
							<md-input type="password"></md-input>
						</md-input-container>
					</form>
					<p>
						<a href="">¿Olvidaste tu contraseña?</a>
					</p>
				</md-card-content>
				<md-card-actions>
					<md-button>Cancelar</md-button>
					
					<router-link to="/ingresar">
						<md-button>
							Ingresar
						</md-button>
					</router-link>
					
					<md-button class="md-raised md-primary">Registrar</md-button>
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
