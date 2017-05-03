<template>
  <header class="myHeader">
    <router-link :to="{path:'/index'}"
                 tag="button"
                 class="home">
      <img src="../../assets/img/logo.png" alt="logo">
    </router-link>
  </header>
</template>
<script>
  import {mapState} from 'vuex'

  export default{
    created(){
      this.$store.dispatch('getLinks')
    },
    computed: mapState(['links'])
  }
</script>
