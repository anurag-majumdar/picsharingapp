<template>
  <div>
      <form action="">
          <input type="text" name="" id="" v-model="user.username" placeholder="username..">
          <input type="password" v-model="user.password" placeholder="passowrd...">
          <button @click.prevent ="login">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user);
    }
  }
};
</script>
 
<style>

</style>
