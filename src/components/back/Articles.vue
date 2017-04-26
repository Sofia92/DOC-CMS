<template>
  <section class="articles">
    <router-link class="text-right" :to="{name:'editor'}"
                 tag="button">新增文章
    </router-link>
    <div v-for="(article,index) in articles">
      <span>{{article.menu}}</span>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-left">标题</th>
          <th class="text-center">选项</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(article,index) in articles">
            <router-link :to="{name:'article',query:{id:article._id}}"
                         tag="td">
              {{article.title}}
            </router-link>
          <td class="text-center">
            <router-link class="fa fa-pencil-square-o"
                         :to="{name:'editor',query:{id:article._id}}"
                         tag="i">
            </router-link>
            <i class="fa fa-trash"
               @click="deleteArticle(article._id)">
            </i>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
  import {mapState, mapActions} from 'vuex'
  export default{
    created(){
      this.getArticles()
    },
    computed: mapState(['articles']),
    methods: mapActions(['getArticles', 'deleteArticle'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/mixins.scss";

  section.articles {
    @include rightSide();
    button {
      @include center();
      position: relative;
      width: 240px;
      height: 60px;
      margin: 30px 0;
      font-size: 20px;
    }
    table {
      position: absolute;
      @include center();
      top: 150px;
      width: 60%;
      tr {
        th {
          font-weight: normal;
          cursor: pointer;
        }
        td:first-of-type {
          color: $green1;
          cursor: pointer;
        }
        td i {
          color: $green2;
          cursor: pointer;
        }
        td i:after {
          display: inline-block;
          width: 10px;
          content: '';
        }
      }
    }
  }
</style>
