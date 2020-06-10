<template>
  <div>
    <v-layout>
      <v-flex>
        <h1 align="center">Study: Lean Tools</h1>
        <v-flex class="d-flex flex-wrap">
          <v-card
            class="mx-auto mt-4"
            v-for="(tech, iterator) in techs"
            :key="iterator"
            max-width="400"
            :color="tech.isCompleted ? '#afffb7' : ''"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Lean Production</div>
                <v-list-item-title class="headline mb-1">{{tech.name}}</v-list-item-title>
                <v-list-item-subtitle>{{tech.title}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar size="80">
                <v-img :src="require('../assets/' + tech.avatarSrc)"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn dark>{{ tech.isCompleted ? 'Start again' : 'Start Course'}}</v-btn>
              <v-progress-linear class="ml-3" max-width="100px" :value="tech.progress"></v-progress-linear>
              <v-icon  color="blue" class="ml-2">{{ tech.isCompleted ? 'mdi-check-decagram' : 'mdi-av-timer'}}</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    techs: [
      {
        name: '5S',
        title:
          'Eliminating waste that results from a poorly organized work area (e.g. wasting time looking for a tool).',
        avatarSrc: '5s.jpg',
        link: '/home',
        progress: 100,
        isCompleted: true
      },
      {
        name: 'Kaizen (Continuous Improvement)',
        title:
          'Combines the collective talents of a company to create an engine for continually eliminating waste from manufacturing processes.',
        avatarSrc: 'kaizen.png',
        link: '/home',
        progress: 15,
        isCompleted: false
      },
      {
        name: 'Kanban (Pull System)',
        title:
          'Eliminates waste from inventory and overproduction. Can eliminate the need for physical inventories (instead relying on signal cards to indicate when more goods need to be ordered).',
        avatarSrc: 'kanban.jpg',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'Key Perfomance Indicators',
        title:
          'Metrics designed to track and encourage progress towards critical goals of the organization. ',
        avatarSrc: 'kpi.jpg',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'Single Minute Exchange of Dies',
        title:
          'Enables manufacturing in smaller lots, reduces inventory, and improves customer responsiveness.',
        avatarSrc: 'smed.jpg',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'Just In Time',
        title:
          'Highly effective in reducing inventory levels. Improves cash flow and reduces space requirements.',
        avatarSrc: 'jit.png',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'Total Productive Maintenance',
        title:
          'Creates a shared responsibility for equipment that encourages greater involvement by plant floor workers. ',
        avatarSrc: 'tpm.jpg',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'Standardized Work',
        title:
          'Eliminates waste by consistently applying best practices. Forms a baseline for future improvement activities.',
        avatarSrc: 'standard.jpg',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'PDCA (Plan, Do, Check, Act)',
        title:
          'Applies a scientific approach to making improvements',
        avatarSrc: 'pdca.jpg',
        link: '/home',
        progress: 0,
        isCompleted: false
      },
      {
        name: 'Gemba (The real place)',
        title:
          'Promotes a deep and thorough understanding of real-world manufacturing issues – by first-hand observation and by talking with plant floor employees.',
        avatarSrc: 'gemba.png',
        link: '/home',
        progress: 0,
        isCompleted: false
      }
    ]
  })
}
</script>

<style>
  .completed {
    background-color: springgreen;
  }
</style>
