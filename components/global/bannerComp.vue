<template>
  <div class="bannerComp" :style="height">
    <img :class="{dim : dim}" :srcset="require('~/assets/img/'+img).srcSet" class="img-fluid" />
    <div class="gallery-text">
    <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
 
  props: ['title','img','height','dim'],

}
  
</script>

<style lang="scss" scoped>
.dim{
  -webkit-filter: brightness(50%);
}
</style>
