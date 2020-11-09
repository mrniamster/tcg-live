<template>
  <div class="bannerComp" :style="height">
    <img :srcset="require('~/assets/img/'+img).srcSet" class="img-fluid" />
    <div class="gallery-text">
    <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
 
  props: ['title','img','height'],

}
  
</script>

<style lang="scss" scoped></style>
