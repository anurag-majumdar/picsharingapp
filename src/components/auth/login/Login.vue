<template>

    <div class="wrapper">

        <!-- <img src="" alt="Logo"/> -->

        <!-- <div class="fbLogin">FB login button here</div>  -->

        <!-- <p style="margin-bottom:0px">OR</p> -->
   
        <form action="">

            <input type="text" id="email" v-model="user.username" placeholder="Email" class="email" />
            <input type="password" v-model="user.password" placeholder="Password" id="password" class="password" />
     
            <div class="signupButtons">
                <button @click.prevent ="login" id="login">Log in</button>
                <button id="signup">Sign up</button>
            </div>

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
 
<style scoped>
  @import url("./login.css");
</style>
