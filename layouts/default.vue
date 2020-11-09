/* eslint-disable prettier/prettier */
<template>
  <div>
   <navBar/>
    <div id="default-body">
      <Nuxt />
    </div>
    BELOW
  </div>
</template>

<script>
import navBar from '~/components/global/navBar'
export default {
   components: {
    navBar,
  },
}
</script>
<style scoped>
#default-body {
  max-width: 800px;
  margin: 0 auto;
}
</style>
