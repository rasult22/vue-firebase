<template>
  <div>
    <v-layout row class="d-flex">
      <v-flex xs12 class="ml-5 mr-4 dashboard-header mt-3 d-flex justify-space-between">
        <h4 class>Dashboard</h4>
        <div>
          <v-badge color="pink" content="3" overlap>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
          <a href="#" class="ml-4">
            <v-icon>mdi-account</v-icon>
          </a>
        </div>
      </v-flex>
      <v-flex class="ml-5 mt-4 mr-4 d-flex flex-wrap dashboard-statistics">
        <h4 class="w-100">Statistics</h4>
        <h5 class="mt-3 progress-title">Implementing lean production:</h5>
        <v-progress-linear class="mt-3" v-model="knowledge" height="25" reactive>
          <strong>{{ Math.ceil(knowledge) }}%</strong>
        </v-progress-linear>
        <div class="mt-3">
          <p>Study Materials - 3/28</p>
          <v-divider></v-divider>
          <p>Practice Exercises - 7/25</p>
          <v-divider></v-divider>
          <p>Comprehence Activity Rate - 1.8/5.0</p>
          <v-btn dark color="blue-grey">Update</v-btn>
        </div>
      </v-flex>
      <v-flex class="ml-5 mt-4 mr-4 d-flex flex-wrap dashboard-statistics">
        <h4 class="w-100">Tools</h4>
        <v-list class="progress-title" dense>
          <v-subheader>Please complete your‏‏‎ ‎ <a href="#"> study</a>‎‎‎‎‏‏‎ ‎to use these tools right way.</v-subheader>
          <v-list-item-group v-model="tech" color="primary">
            <v-list-item v-for="(tech, i) in techs" :key="i">
              <v-list-item-icon>
                <v-icon color="" v-text="tech.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> {{tech.text}} | <a href="#">Visit</a></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
       <v-flex class="ml-5 mt-4 mr-4 d-flex flex-wrap dashboard-statistics">
        <h4 class="w-100">Tips</h4>
        <v-list class="progress-title" disabled>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon color="orange" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> {{item.text}} | <a href="#">More info</a></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    knowledge: 30,
    items: [
      { text: 'You were not complete Study Matrials.', icon: 'mdi-alert-box' },
      { text: 'Please set you bussiness departaments info.', icon: 'mdi-alert-box' },
      { text: 'You have not join us in Discord ', icon: 'mdi-alert-box' },
      { text: 'Please set the goals of your bussiness ', icon: 'mdi-alert-box' }
    ],
    techs: [
      { text: '5S', icon: 'mdi-tools' },
      { text: 'Bottleneck Analysis', icon: 'mdi-tools' },
      { text: 'Continuous Flow ', icon: 'mdi-tools' },
      { text: 'KPIs (Key Performance Indicators)', icon: 'mdi-tools' },
      { text: 'Single-Minute Exchange of Dies (SMED)', icon: 'mdi-tools' },
      { text: 'PDCA (Plan, Do, Check, Act)', icon: 'mdi-tools' }
    ]
  })
}
</script>

<style scoped>
.dashboard-header,
.dashboard-statistics {
  padding: 8px 10px;
  background-color: #eeeeee;
  border-radius: 5px;
  box-shadow: 2px 1px rgba(116, 161, 199, 0.6);
}
.dashboard-statistics {
  max-width: 500px;
}

.progress-title {
  width: 100%;
}
</style>
