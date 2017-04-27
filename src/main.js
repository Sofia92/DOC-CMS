import Vue          from 'vue'
import VueResource  from 'vue-resource'
import {mapState}   from 'vuex'
import Spinner      from './components/share/Spinner.vue'
import Toast        from './components/share/Toast.vue'


import store        from './store'
import router       from './router'

import './style/index.scss'

Vue.use(VueResource);


new Vue({
  router,
  store,
  components: {Spinner, Toast},
  computed: mapState(['isLoading', 'isToasting'])
}).$mount('#WMSGuide');
