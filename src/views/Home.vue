<template>
  <div class="home">
    <h1 align="center" class="display-1 mt-5 text-uppercase font-weight-bold" >Grow your small bussiness by implementing Lean</h1>
    <div class="flex-container">
      <div class="flex-element lean-info">
        <p class="font-weight-light title">Reduce almost 90% wastes in your business processes </p>
        <p class="font-weight-light title">Your personal assistant to implenting lean tools</p>
        <p class="font-weight-light title">Join community of lean enthusiasts</p>
        <v-btn class="mt-7" color="#FFEE7C">Get started</v-btn>
        <v-img max-width="150px" class="mt-7" src="../assets/business_shop.svg"></v-img>
      </div>
      <v-img class="flex-element" align="center" max-width="400px" src="../assets/main_page_curve.svg"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  })
}
</script>

<style scoped>
.lean-info{
  max-width: 500px;
}
.home {
  background-color: #B7C3FF;
  padding: 30px 20px;
  min-height: 90vh;
}
.flex-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
}

</style>
