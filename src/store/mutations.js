export default {
  SET_ARTICLES: (state, articles) => {
    state.articles = articles
  },
  SET_CATEGORIES: (state, categories) => {
    state.categories = categories
  },
  SET_MENUS: (state, menus) =>{
    state.articlesMenus = menus
  },
  SET_LINKS: (state, links) => {
    state.links = links
  },
  SET_ARTICLE: (state, article) => {
    state.article = article
  },
  LOADING_TOGGLE: (state, isLoading) => {
    state.isLoading = isLoading
  },
  TOASTING_TOGGLE: (state, isToasting) => {
    state.isToasting = isToasting
  },
  SET_USER: (state, user) => {
    state.user = user
  },
  /**
   * single article operations
   * */
  UPDATE_CONTENT: (state, content) => {
    state.article.content = content
  },
  UPDATE_TITLE: (state, title) => {
    state.article.title = title
  },
  UPDATE_ARTICLE_CATEGORY: (state, category) => {
    state.article.category = category
  },

  /**
   * link operations
   * */
  UPDATE_LINK_NAME (state, {name, index}) {
    const href = state.links[index].href;
    const category = state.links[index].category;
    state.links.splice(index, 1, {name, category, href})
  },
  UPDATE_LINK_HREF (state, {href, index}) {
    const name = state.links[index].name;
    const category = state.links[index].category;
    state.links.splice(index, 1, {name, category, href})
  },
  UPDATE_LINK_CATEGORY (state, {category, index}) {
    const name = state.links[index].name;
    const href = state.links[index].href;
    state.links.splice(index, 1, {name, category, href})
  },
  ADD_NEW_LINK (state, index) {
    state.links.splice(index, 0, {name: '', href: '', category: ''})
  },
  REMOVE_LINK (state, index) {
    state.links.splice(index, 1)
  },
/**
 * category operations
 * */
  UPDATE_CATEGORY (state, {name, index}) {
    state.categories.splice(index, 1, {name});
  },
  REMOVE_CATEGORY (state, index) {
    state.categories.splice(index, 1)
  },
  ADD_NEW_CATEGORY (state, index) {
    state.categories.splice(index, 0, {name: ''})
  },
  SET_TOAST (state, payload) {
    state.toast.info = payload.info
    state.toast.btnNum = payload.btnNum
    state.toast.promise = new Promise((resolve, reject) => {
      state.toast.toastResolve = resolve
      state.toast.toastReject = reject
    })
  }
}
