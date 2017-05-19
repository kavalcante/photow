<template>
<section class="bg-background">
<div class="container-fluid">
  <div class="row">
    <div class="col-xs-12 login-wrapper">
      <button class="btn-login" @click="login()">
        <i class="fa fa-google" aria-hidden="true"></i>
        Login with Google
      </button>
    </div>
  </div>
</div>
</section>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  name: 'Main',
  methods: {
    login() {
      return this.attemptLogin()
      .then(() => this.$router.push('/home'))
      .catch(error => console.log(error));
    },
    ...mapActions(['attemptLogin']),
  },
};
</script>

<style lang="css" scoped>
  .bg-background {
    background-image            : url("/static/bg-login.jpeg");
    background-size             : cover;
    background-repeat           : no-repeat;
    background-position         : center center;
    background-attachment       : fixed;
    height: 100vh;
  }

  .login-wrapper {
    text-align: center;
  }

  .btn-login {
    margin-top    : 20vh;
    background    : transparent;
    border        : 1px solid #000000;
    border-radius : 0.3em;
    color         : #000000;
    width         : 12em;
    height        : 2.3em;
    padding       : 0.3em;
    outline       : 0;
  }

  @media screen and (max-width: 768px) {
    .bg-background {
      background-size: initial !important;
    }

    .btn-login{
      border-color: #FFFFFF;
      color: #FFFFFF;
    }
  }
</style>
