<template>
  <section class="categories">
    <div class="title" style="padding: 0 40px;">类目编辑</div>
    <table class="table">
      <tbody>
      <tr>
        <th></th>
        <th>类目</th>
      </tr>
      <tr v-for="(cat,index) in categories">
        <td>
          <i class="fa fa-plus-circle" @click="ADD_NEW_CATEGORY(index)" v-if="categories.length<20"> </i>
          <i class="fa fa-minus-circle" @click="REMOVE_CATEGORY(index)" v-if="categories.length>0"> </i>
        </td>
        <td>
          <input type="text" :value="cat.name" placeholder="类目"
                 @input="UPDATE_CATEGORY({name: $event.target.value, index})">
        </td>
      </tr>
      </tbody>
    </table>
    <div class="panel">
      <button @click="saveCategories">保存</button>
    </div>
  </section>
</template>
<script>
  import {mapMutations, mapActions, mapState} from 'vuex'
  export default{
    created(){
      this.getCategories()
    },
    computed: mapState(['categories']),
    methods: {
      ...mapActions(['saveCategories', 'getCategories']),
      ...mapMutations(['UPDATE_CATEGORY', 'ADD_NEW_CATEGORY', 'REMOVE_CATEGORY'])
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  @import "../../style/mixins.scss";

  section.categories {
    height: 100%;
    min-width: 500px;
    .title {
      @include title();
    }
    table {
      @include center();
      padding-top: 100px;
      width: 70%;
      position: relative;
      input {
        box-sizing: border-box;
        height: 30px;
        padding: 6px;
        transition: all 0.2s;
        border-left: 0 solid $green1;
      }
      input:focus {
        border-left: 6px solid $green1;
      }
      tr {
        height: 50px;
        th {
          &:first-of-type {
            width: 120px;
          }
          &:last-of-type {
            width: 60%;
          }
        }
        td {
          text-align: center;
          input {
            width: 100%;
          }
          &:first-of-type {
            input {
              max-width: 60px;
            }
            i {
              cursor: pointer;
              transition: all 0.4s;
              &:after {
                content: '';
                width: 10px;
                display: inline-block;
              }
              &:hover {
                color: $green1
              }
            }
          }
        }
      }
    }
    .panel {
      position: absolute;
      bottom: 40px;
      right: 100px;
      button {
        @include greenButton();
        height: 30px;
        width: 80px;
      }
    }
  }
</style>
