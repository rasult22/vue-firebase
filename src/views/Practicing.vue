<template>
  <div class="">
    <h1 align="center" class="mt-3 mb-3">Practicing</h1>
    <h2 align="center" class="mt-2 mb-2">Kanban (Pull System)</h2>
    <p class="ml-2 mr-2" align="center">Eliminates waste from inventory and overproduction. Can eliminate the need for physical inventories (instead relying on signal cards to indicate when more goods need to be ordered).</p>
    <drag-drop
      :dropzones="dropGroups"
      :dropzonesTitle="'Lean Company Teams  '"
      :originalData="stories"
      :originalTitle="'Tasks to be done'"
      :inPlace="true"
      :enableSave="true"
      :enableCancel="true"
      @dropInOriginalBucket="originalBucketDropEvent"
      @dropInDestinationBucket="destinationBucketDropEvent"
      @save="save"
      @cancel="cancel"
    >
      <template #dd-card="{ cardData }">
        <kanban-card :data="cardData" @done="doneMarked" />
      </template>
    </drag-drop>
  </div>
</template>

<script>
import DragDrop from 'vue-drag-n-drop'
import KanbanCard from '../components/KanbanCard'
export default {
  components: {
    DragDrop,
    KanbanCard
  },
  methods: {
    doneMarked () {
      alert(1)
    }
  },
  data: () => ({
    stories: [
      {
        title: 'Strategy 101',
        description: 'Create a draft of business plan',
        time: '3 days',
        done: false
      },
      {
        title: 'Strategy 102',
        description: 'Finalize the plan',
        time: '4 days',
        done: false
      },
      {
        title: 'Tech diagram',
        description: 'Draw the tech data',
        time: '4 days',
        done: false
      },
      {
        title: 'Place Holder',
        description: 'Data Science Team',
        time: '5 days',
        done: false
      }
    ],
    dropGroups: [
      {
        name: 'Business Team',
        children: []
      },
      {
        name: 'Tech Dept',
        children: []
      },
      {
        name: 'Marketing Dept',
        children: []
      }
    ]
  }),
  created () {
    this.$emit('hideDrawer')
  }
}
</script>

<style scoped>
</style>
