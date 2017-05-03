<template>
  <main class="wrap">
    <my-header></my-header>
    <section class="archive">
      <div class="item" v-for="article in articles">
        <div class="categoryName">{{article.name}}</div>
        <ul class="article">
          <router-link :to="{path:'/article',query:{id:article._id}}"
                       tag="li" v-for="menu in article.submenu"
                       class="title">
            {{menu.title}}
          </router-link>
        </ul>
      </div>
    </section>
    <my-footer></my-footer>
  </main>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import MyHeader   from './MyHeader.vue'
  import MyFooter   from './MyFooter.vue'
  import Spinner    from '../share/Spinner.vue'

  export default{
    created(){
      this.getArticles()
    },
    computed: {
      ...mapState(['articles']),
      ...mapGetters(['archive'])
    },
    methods: {...mapActions(['getArticles'])},
    components: {Spinner, MyHeader, MyFooter}
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  main.wrap {
    min-height: 100%;
    position: relative;
  }

  section.archive {
    padding-bottom: 160px;
    .item{
      float: left;
      width: 32.2%;
      padding: 10px;
      margin: 0.5%;
      border-left: 2px solid #42b983;
      background: #f9f9f9;
      .categoryName{
        float: left;
        width: 25%;;
      }
      ul {
        float: left;
        padding: 0;
        margin-bottom: 0;
        li.title{
          list-style: none;
          color: #42b983;
          cursor: pointer;
          word-break: break-all;
          &:hover {
            color: #267B54;
          }
        }
      }
    }
  }

</style>
