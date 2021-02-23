<template>
  <div class="bannerComp" :style="height">
    <img :class="{dim : dim}" :srcset="require('~/assets/img/'+img).srcSet" class="img-fluid" />
    <div class="gallery-text">
    <h1>{{title}}<br><p class="sh text-white">{{subtitle}}</p></h1>
    <p class="text-white sub">{{sub}}</p>
    </div>
  </div>
</template>

<script>
export default {
 
  props: ['title','img','height','dim','subtitle','sub'],

}
  
</script>

<style lang="scss" scoped>
.dim{
  -webkit-filter: brightness(50%);
}
</style>
