<template>
  <main class="wrap wrap-article">
    <my-header></my-header>
    <!--<menu-bar></menu-bar>-->
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
  import MenuBar     from './MenuBar.vue'
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
          hljs.initHighlighting.called = false;
          hljs.initHighlighting()
        }, 0)
      }
    },
    computed: mapState({
      article: state => {
        state.article.content = marked(state.article.content || '');
        return state.article
      }
    }),
    components: {MenuBar, MyHeader},
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
    width: calc(100% - 200px);
    padding-left: 40px;
    float: left;
    article {
      .title {
        font-size: 1.8em;
        padding-top: 12px;
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
          margin: 1.5em 0;
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
