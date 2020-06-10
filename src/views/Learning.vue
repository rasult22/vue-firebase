<template>
  <div>
    <h1 class="center">{{ this.currentCourse.title }}</h1>
    <v-row>
      <v-col class="d-flex flex-wrap .justify-space-between">
        <v-card
          :color="card.id === 1 ? '#afffb7' : ''"
          class="card mt-4"
          max-width="390"
          v-for="card in currentCourse.lessonParts"
          :key="card.id"
        >
          <v-card-text>
            <div>Part {{card.id}}</div>
            <h3 class="text--primary mt-2">{{card.title}}</h3>
          </v-card-text>
          <v-card-actions>
            <v-btn dark color="blue" @click="handleDialog()">Open</v-btn>
            <v-spacer></v-spacer>
            <v-icon
              color="blue"
              class="ml-2"
            >{{ card.id === 1 ? 'mdi-check-decagram' : 'mdi-av-timer'}}</v-icon>
            <v-text>
              <div>{{card.id * parseInt((Math.random() * 10))}} min.</div>
            </v-text>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn
            style="z-index: -1000;"
            class="open-dialog"
            color="primary"
            dark
            v-on="on"
          >Open Dialog</v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Part 1. What is the 5S tool?</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark text @click="dialog = false">Next Page</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-list class="ml-5 mr-5" three-line subheader>
            <h1 class="mt-4 mb-4">Part 1. What is the 5S tool?</h1>
            <p v-for="(p, i) in this.currentCourse.lessonParts[0].paragraphs" :key="i">{{p}}</p>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader class="d-flex flex-wrap mt-4">
            <v-card max-width="344" class="mx-auto">
              <v-img src="../assets/Resource_corner_5S_Safety_Scanfil_Sieradz.jpg" height="194"></v-img>
              <v-card-text>5S resource corner at Scanfil Poland factory in Sieradz.</v-card-text>
            </v-card>
            <v-card max-width="344" class="mx-auto">
              <v-img src="../assets/5S_methodology.png" contain height="194"></v-img>
              <v-card-text>5S methodology. </v-card-text>
            </v-card>
            <v-card max-width="344" class="mx-auto">
              <v-img src="../assets/5s_scheme.png" contain height="194"></v-img>
              <v-card-text>The scheme "Correct Arrangement of the Tool" from a USSR Central Institute of Labour instruction sheet, 1920-1924. </v-card-text>
            </v-card>
            <v-card max-width="344" class="mx-auto">
              <v-img src="../assets/shadowboard.jpg" contain height="194"></v-img>
              <v-card-text>Shadow Board (with tools' outline) and worker's movement that is being used in Production floor</v-card-text>
            </v-card>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    techSlug: {
      type: String,
      required: true
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    currentCourse () {
      return this.$store.getters.getCourseBySlug(this.techSlug)
    }
  },
  methods: {
    handleDialog () {
      document.querySelector('.open-dialog').click()
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  margin-top: 20px;
}
.card {
  margin-left: 20px;
  margin-top: 10px;
}
</style>
