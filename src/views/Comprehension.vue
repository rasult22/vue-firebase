<template>
  <div class="container-c">
    <div class="container-c">
      <h1 align="center" class="mt-3 mb-3">Comprehence</h1>
      <h2 class="ml-4">Forum</h2>
      <div class="d-flex">
        <h2 class="ml-4">Topic: Lean production 5S tool</h2>
        <v-btn class="ml-auto" dark color="#9fff82">Post new</v-btn>
      </div>
      <v-layout class="mt-5">
        <v-flex>
          <v-card class="pl-3 pr-3 pt-3 pb-3 mt-3" max-width="1200px" v-for="n in 10" :key="n">
            <v-list-item>
              <v-list-item-avatar color="blue"></v-list-item-avatar>
              <v-list-item-content>
                <div class="d-flex">
                  <v-list-item-title class="headline" style="cursor:pointer;">How to implement 5S to medical industy?</v-list-item-title>
                  <v-list-item-subtitle align="right" class="ml-auto d-block">by <span style="color:black; line-height:30px">username</span> 18/02/2020 </v-list-item-subtitle>

                </div>
                <div class="d-flex">
                  <v-icon color="black" class="mr-1" >mdi-undo</v-icon>
                  <v-list-item-subtitle>
                    Latest reply by
                    <span style="color:black; line-height:30px" >username</span> - Just now
                  </v-list-item-subtitle>
                  <v-list-item-subtitle align="right">2</v-list-item-subtitle>
                </div>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>Hello everyone! I'm medical student and want to implement lean prodcution principles in my workflow. Can you please suggest ideas of improving my job. We have thee different areas...</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container-c {
  padding: 15px;
  background-color: whitesmoke;
}
</style>
