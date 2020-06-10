<template>
  <div>
    <h1 align="center" class="font-weight-light mt-4"> 5S technology</h1>
    <v-card max-width="800" v-for="(item, i) in items" :key="i" class="ml-5 mt-3">
      <v-container>
        <v-row dense>
          <v-col cols="10">
            <v-card :color="item.color" dark>
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title class="headline" v-text="item.title">
                    <v-icon>mdi-home</v-icon>
                  </v-card-title>

                  <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
                  <v-card-actions>
                    <v-btn text v-on:click="goTo(item.url)"> Select</v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col  cols="2" class="d-flex justify-center">
            <v-card :color="item.color"  min-width="100" class="d-flex justify-center">
              <div class="d-flex justify-space-around">
                <v-icon large>mdi-{{item.icon}}</v-icon>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        color: '#48036F',
        title: 'Learning',
        subtitle: 'Dive into learning 5S technology process',
        icon: 'book',
        url: 'Learning/5S'
      },
      {
        color: '#679B00',
        title: 'Practicing',
        subtitle: 'Try it by yourself',
        icon: 'human-handsup',
        url: 'Practicing'
      },
      {
        color: '#A68900',
        title: 'Сomprehension',
        subtitle: 'Consider, Ask, Have a conversation with others',
        icon: 'account-question',
        url: 'Comprehension'
      },
      {
        color: '#03406A',
        title: 'Assistant',
        subtitle: 'Consider, Ask, Have a conversation with others',
        icon: 'handshake',
        url: 'Assistant/5S'
      }
    ]
  }),
  methods: {
    goTo (url) {
      console.log(url)
      this.$router.push(url)
    }
  }
}
</script>
<style>
</style>
