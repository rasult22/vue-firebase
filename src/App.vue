<template>
  <v-app id="inspire">
    <AppNavigation />
    <v-content>
      <router-view @hideDrawer="hideDrawer()"></router-view>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation'
import store from './store/index'
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    AppNavigation,
    AppFooter
  },
  props: {
    source: String
  },
  data: () => ({}),
  created () {
    this.$vuetify.theme.dark = false
  },
  methods: {
    hideDrawer () {
      store.state.drawer = false
    }
  }
}
</script>

<style lang="less" scoped>
</style>
