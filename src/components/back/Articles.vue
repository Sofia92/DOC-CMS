<template>
  <section class="articles">
    <div class="col-sm-12 text-center">
      <router-link class="btn btn-success" :to="{name:'editor'}"
                   tag="button"><i class="fa fa-plus"></i>&nbsp;&nbsp;新增文章
      </router-link>
    </div>
    <div class="col-sm-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="text-left">类目</th>
            <th class="text-left">标题</th>
            <th class="text-center">选项</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article,index) in articles">
            <td class="text-left">
              {{article.category}}
            </td>
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
    </div>
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
      margin-top:50px;
    }
    table {
      position: absolute;
      @include center();
      top: 50px;
      width: 60%;
      tr {
        th {
          font-weight: normal;
          cursor: pointer;
        }
        td:nth-of-type(2) {
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
