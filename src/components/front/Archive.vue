<template>
  <main class="wrap">
    <my-header></my-header>
    <section class="archive">
      <div class="item" v-for="article in articles">
        <div class="categoryName">{{article.name}}</div>
        <div class="article">
          <router-link :to="{path:'/article',query:{id:submenu._id}}"
                       v-for="submenu in article.submenu" target="_blank"
                       class="title">
            {{submenu.title}}
          </router-link>
        </div>
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
      .article {
        float: left;
        padding: 0;
        margin-bottom: 0;
        a.title{
          display: block;
          color: #42b983;
          word-break: break-all;
          &:hover {
            color: #267B54;
          }
        }
      }
    }
  }

</style>
