<template>
  <header>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="brand" to="/home">
            <img src="/static/logo.png" alt="Photow" class="app-logo">
            <span class="app-name">Photow</span>
          </router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><img :src="currentUser.photoURL" class="img-circle" style="margin-top: .4rem" width="40" height="40"></li>
            <li><button @click="logout()" class="btn btn-link">Sair</button></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'hello',
  methods: {
    ...mapActions(['attemptLogout']),
    logout() {
      this.attemptLogout();
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:300');

.app-name {
  font-family : 'Poppins', sans-serif;
  font-size   : larger;
  color: #FFF;
}

.navbar-header {
  margin-top: 1rem;
}

.app-logo {
  width: 2em;
  border-radius: 0.6em;
  margin-right: 0.3em;
}
</style>
