<template>
  <div class="main__logo">
    <img :src=" require('../images/main-logo.png') " alt="logo">
  </div>
</template>

<script>
export default {
    name: "AppLogo",

}
</script>

<style lang="sass" scoped>
.main__logo
  cursor: pointer
  margin: $margin*3
</style>>
