<template>
  <div id="app">
    I am App.vue
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
      setTimeout(() => {
          console.log("箭头函数")
      },1000)
  },
  mounted() {

  }
}
</script>
