<template>
  <aside class="menuBar">
    <ul class="menu">
      <li v-for="link in links">
        <a :href="link.href">
          {{link.name}}
        </a>
      </li>
    </ul>
  </aside>
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
<style lang="sass" rel="stylesheet/scss" scoped>

  aside.menuBar {
    float: left;
    height: 100%;
    width: 200px;
    border-right:1px solid #eee;
    ul {
      float: right;
      margin: 0;
      li {
        list-style: none;
        display: inline-block;
        padding: 18px 14px;
        a {
          color: #2c3e50;
          &:hover {
            text-decoration: none;
            border-bottom: 2px solid #42b983;
          }
          &:active {
            text-decoration: none;
            border-bottom: 2px solid #42b983;
          }
        }
      }
    }
  }
</style>
