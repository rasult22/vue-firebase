<template>
  <div>
    <v-navigation-drawer v-model="getDrawer" app clipped>
      <v-list dense>
        <v-list-item link v-for="link in getLinks" :key="link.id" :to="link.linkURL">
          <v-list-item-action>
            <v-icon>mdi-{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.linkName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app light class clipped-left>
      <v-app-bar-nav-icon @click="toggleDrawer()" />
      <v-toolbar-side-icon>
        <v-img class="app-logo" src="@/assets/logo.png" />
      </v-toolbar-side-icon>
      <v-toolbar-title>Lean Production | Kaizen Assistant</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  data: () => ({
  }),
  computed: {
    getLinks () {
      return store.getters.getLink
    },
    getDrawer () {
      return store.state.drawer
    }
  },
  methods: {
    toggleDrawer () {
      store.state.drawer = !store.state.drawer
    }
  },
  beforeCreate () {
    this.drawer = store.state.drawer
  }
}
</script>

<style lang="less" scoped>
.app-logo {
  width: 85px;
}
</style>
