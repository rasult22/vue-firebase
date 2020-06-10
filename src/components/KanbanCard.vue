<template>
  <v-card class="cc-card mb-3 mt-2">
    <v-card-title >{{data.title}}</v-card-title>
    <p class="text--primary pl-4">{{data.description}}</p>
    <v-btn  v-if="!data.done" color="#69ff5e" class="cc-btn ml-3 mb-2" @click="markDone()">Mark Done</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'KanbanCard',
  props: ['data'],
  methods: {
    markDone () {
      this.$emit('done', this.data)
    }
  }
}
</script>

<style>
.cc-card{
    background: wheat;
    margin-left: 5px;
    padding: 1px 8px;
}

.vue-drag-n-drop{
    /* whole container */
    background-color: #dcdaf2;
    padding: 20px;
}
.dd-title{
    /* Titles */
    color: Black;
}
.dd-first-group {
    /* Original Cards Container */
    background-color: whitesmoke;
    padding: 20px 10px;
}
.dd-card-ghost{
    /* card behavior in dragging time  */
    opacity: 0.8;
}
.dd-card-ghost-drop{
    /* Drop animation */
    color: white;
}
 .dd-result-group{
     /* resut container */
     background-color: #f2d587;
     min-height: 500px;
 }
 .smooth-dnd-container{
    border-top: 1.5px dashed black;
 }
 .dd-drop-container {
     /* Drop container style */
     color: black;
     min-height: 150px !important;
 }
</style>
