<template>
  <main class="wrap wrap-article">
    <my-header></my-header>

    <!--<aside class="sideMenu">-->
      <!--<menu class="navigation">-->
        <!--<ul>-->
          <!--<router-link :to="{path:'/index'}" tag="li">-->
            <!--<i class="fa fa-list-ul fa-fw"></i>-->
            <!--<span>Transfer</span>-->
          <!--</router-link>-->
          <!--<router-link :to="{name:'articles'}" tag="li">-->
            <!--<i class="fa fa-list-ul fa-fw"></i>-->
            <!--<span>Pick</span>-->
          <!--</router-link>-->
          <!--<router-link :to="{name:'links'}" tag="li">-->
            <!--<i class="fa fa-list-ul fa-fw"></i>-->
            <!--<span>Ship</span>-->
          <!--</router-link>-->
          <!--<router-link :to="{name:'account'}" tag="li">-->
            <!--<i class="fa fa-list-ul fa-fw"></i>-->
            <!--<span>Receive</span>-->
          <!--</router-link>-->
        <!--</ul>-->
      <!--</menu>-->
    <!--</aside>-->
    <section class="article">
      <article class="block">
        <div class="title">{{article.category}} - {{article.title}}</div>
        <div class="content" v-html="article.content"></div>
      </article>
    </section>

  </main>
</template>
<script>
  import {mapState}   from 'vuex'
  import marked       from '../../assets/js/marked.min'
  import hljs         from '../../assets/js/highlight.pack'
  import MyHeader     from './MyHeader.vue'

  export default{
    created(){
      this.fetchData()
    },
    updated(){
      this.highlight()
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getArticle', this.$route.query.id)
      },
      highlight(){
        setTimeout(() => {
          hljs.initHighlighting.called = false
          hljs.initHighlighting()
        }, 0)
      }
    },
    computed: mapState({
      article: state => {
        state.article.content = marked(state.article.content || '')
        return state.article
      }
    }),
    components: {MyHeader},
    watch: {
      '$route': ['fetchData', 'highlight']
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  @import "../../style/variables";
  .wrap-article{
    height:100%;
  }

  .wrap {
    min-height: 100%;
    position: relative;
  }

  section.article {
    line-height: 1.6;
    padding-bottom: 160px;
    article {
      .title {
        /*margin: 0.65em 0;*/
        font-size: 1.5em;
      }
      .info {
        color: #7f8c8d;
        margin: 1.2em 0;
        span {
          margin-left: 0.5rem;
        }
      }
      .content {
        h2, h3, h4, h5, h6 {
          position: relative;
          &:before {
            content: "#";
            color: $green1;
            position: absolute;
            left: -0.7em;
            top: -4px;
            font-size: 1.2em;
            font-weight: bold;
          }
        }
        h4, h5, h6 {
          &:before {
            content: ""
          }
        }
        h2 {
          margin: 35px 0 20px;
          font-size: 26px;
        }
        h3 {
          margin: 20px 0;
          font-size: 21px;
        }
        h4{
          font-size: 18px
        }
        h5 {
          font-size: 16px;
        }
        h6 {
           font-size: 14px;
         }
        a {
          color: $green1;
          word-break: break-all;
        }
        blockquote {
          margin: 2em 0;
          padding-left: 20px;
          border-left: 4px solid $green1;
          background: rgba(220, 220, 220, 0.14);
        }
        img {
          display: block;
          max-width: 100%;
          margin: 1em auto
        }
        code,
        pre {
          font-size: 0.8em;
          background-color: #f8f8f8;
          font-family: 'Roboto Mono', Monaco, courier, monospace;
          color: #525252;
        }
      }
    }
  }
</style>
