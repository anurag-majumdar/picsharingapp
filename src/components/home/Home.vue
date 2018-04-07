<template>
  <div>
      <h3>Home component</h3>
      <router-link to="/login" activeClass="active" tag="li">
                    <a>Login</a>
     </router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>
