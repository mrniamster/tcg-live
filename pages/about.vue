<template>
    <div>
<h1>About us:</h1>
<p>We are Niamsters {{this.$route.params.id}}</p>
<button @click="$nuxt.setLayout('dark')">Change color mode</button>
    </div>
</template>

<script>
    export default {
  methods: {

  },
        layout:'default',
    }
</script>

<style lang="sass" scoped>
$color: red;
h1 
    color: $color
    

</style>