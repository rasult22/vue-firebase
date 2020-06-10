import Vue from 'vue'
import Vuex from 'vuex'
import learning from './learning'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    learning
  },
  state: {
    drawer: true,
    links: [
      {
        linkName: 'Home',
        linkURL: '/Home',
        icon: 'home',
        id: 1
      },
      {
        linkName: 'Dashboard',
        linkURL: '/Dashboard',
        icon: 'compass',
        id: 2
      },
      {
        linkName: '5S',
        linkURL: '/5S',
        icon: 'cogs',
        id: 3
      },
      {
        linkName: 'Standartization',
        linkURL: '/standartization',
        icon: 'group',
        id: 4
      },
      {
        linkName: 'Visualization',
        linkURL: '/visualization',
        icon: 'eye',
        id: 5
      },
      {
        linkName: 'Tools',
        linkURL: '/tools',
        icon: 'tools'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getLink (state) {
      return state.links
    }
  }
})
