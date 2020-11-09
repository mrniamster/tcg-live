<template>
  <div class="bg-danger text-dangerp-4 mb-4">
    <p>{{data}}</p>
    <ul v-for="arr in array">
      <li>{{arr}}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
props:['data','array']
}
</script>

<style lang="scss" scoped></style>
