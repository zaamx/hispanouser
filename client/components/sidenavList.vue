<template>
  <md-list>
    <md-list-item >
      <router-link to="/">
        <md-icon>move_to_inbox</md-icon> <span>Home</span>
      </router-link>
    </md-list-item>
    <md-list-item >
      <router-link to="/ingresar">
        <md-icon>move_to_inbox</md-icon> <span>Login</span>
      </router-link>
    </md-list-item>

    <md-list-item >
      <router-link to="/llamadoctor">
        <md-icon>move_to_inbox</md-icon> <span>Llama al Doctor</span>
      </router-link>
    </md-list-item>

    <md-list-item >
      <router-link to="/ingresar">
        <md-icon>move_to_inbox</md-icon> <span>Red de Descuentos</span>
      </router-link>
    </md-list-item>

    <md-list-item >
      <router-link to="/ingresar">
        <md-icon>move_to_inbox</md-icon> <span>Salud Dental</span>
      </router-link>
    </md-list-item>

    <md-list-item >
      <router-link to="/ingresar">
        <md-icon>move_to_inbox</md-icon> <span>Salud Visual</span>
      </router-link>
    </md-list-item>

    <md-list-item >
      <router-link to="/ingresar">
        <md-icon>move_to_inbox</md-icon> <span>Repatriación funeraria</span>
      </router-link>
    </md-list-item>

  </md-list>
</template>
<script >
export default {
  data() {
    return{
      contenido: 'Hello'
    }
  }
}
</script>