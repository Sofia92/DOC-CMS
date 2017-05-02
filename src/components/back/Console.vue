<template>
  <div class="container-doc">
    <status-bar></status-bar>
    <aside class="console">
      <menu class="navigation">
        <ul>
          <router-link :to="{path:'/index'}" tag="li">
            <i class="fa fa-star fa-fw"></i>
            <span>总览</span>
          </router-link>
          <router-link :to="{path:'/admin'}" tag="li">
            <i class="fa fa-edit fa-fw"></i>
            <span>内容编辑</span>
          </router-link>
          <router-link :to="{name:'links'}" tag="li">
            <i class="fa fa-list-ul fa-fw"></i>
            <span>链接管理</span>
          </router-link>
          <router-link :to="{name:'categories'}" tag="li">
            <i class="fa fa-edit fa-fw"></i>
            <span>类目管理</span>
          </router-link>
          <router-link :to="{name:'account'}" tag="li">
            <i class="fa fa-user fa-fw"></i>
            <span>账户管理</span>
          </router-link>
        </ul>
      </menu>
    </aside>
    <div class="subView">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import {get}        from '../../assets/js/cookieUtil'
  import StatusBar    from './StatusBar.vue'
  import {mapState, mapMutations}   from 'vuex'

  export default{
    created(){
      const user = get('user')
      if (!user) this.$router.push('/')
      if (user && !this.user.name) this.SET_USER({name: user, pwd: ''})
    },
    components: {StatusBar},
    computed: mapState(['user']),
    methods: mapMutations(['SET_USER'])
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  $pictureSize: 100px;
  .container-doc {
    height: 100%;
  }

  aside.console {
    box-sizing: border-box;
    padding-top: 50px;
    float: left;
    height: calc(100% - 50px);
    width: 200px;
    border-right: 1px solid rgba(0,0,0,0.08);
    menu {
      margin: 20px 0;
      padding: 0;
      ul {
        padding: 0 0 0 30px;
        > li {
          transition: all 0.4s;
          margin-top: 10px;
          padding-left: 4px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          > span {
            display: inline-block;
            margin-left: 20px;
          }
          &:hover {
            padding-left: 8px;
            transition: all .2s;
            border-left: 0 solid #42b983;
          }
        }
      }
    }
  }

  div.subView {
    margin-left: 200px;
    width: calc(100% - 200px);
    height: calc(100% - 50px);
    margin-top: 30px;
  }
</style>
