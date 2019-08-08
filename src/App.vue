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
          console.log(1)
      },1000)
  },
}
</script>
