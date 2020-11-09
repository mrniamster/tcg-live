<template>
  <div class="bannerComp">
    <img :srcset="require('~/assets/img/'+img).srcSet" class="img-fluid" />
    <div class="gallery-text">
    <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
 
  props: ['title','img'],

}
  
</script>

<style lang="scss" scoped></style>
